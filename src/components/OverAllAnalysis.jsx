import React, { useEffect, useState, useMemo, useCallback } from "react";
import { debounce } from "lodash";

function calculateUptime(data) {
  const result = [];

  // Iterate over each category (tank, borewell, water)
  for (const category in data) {
    if (data.hasOwnProperty(category)) {
      const nodes = data[category];

      // Iterate over each node within the category
      for (const nodeName in nodes) {
        if (nodes.hasOwnProperty(nodeName)) {
          const statuses = nodes[nodeName];
          const total = statuses.length;
          const trueCount = statuses.filter((status) => status === true).length;

          // Calculate uptime percentage
          const uptimePercentage = ((trueCount / total) * 100).toFixed(2) + "%";

          // Push the result object to the array
          result.push({
            nodeName: nodeName,
            uptime: uptimePercentage,
          });
        }
      }
    }
  }

  return result;
}

function constructOverallPrompt(uptimeArray) {
  // Calculate overall statistics
  const totalNodes = uptimeArray.length;
  const excellentNodes = uptimeArray.filter(
    (node) => parseFloat(node.uptime) >= 90
  ).length;
  const goodNodes = uptimeArray.filter(
    (node) => parseFloat(node.uptime) >= 70 && parseFloat(node.uptime) < 90
  ).length;
  const averageNodes = uptimeArray.filter(
    (node) => parseFloat(node.uptime) >= 40 && parseFloat(node.uptime) < 70
  ).length;
  const poorNodes = uptimeArray.filter(
    (node) => parseFloat(node.uptime) < 40 && parseFloat(node.uptime) > 0
  ).length;
  const stoppedNodes = uptimeArray.filter(
    (node) => parseFloat(node.uptime) === 0
  ).length;

  const prompt = `
I have the uptime data for all nodes for today. The uptime percentage indicates the portion of the day from 00:00 to the current time that each node has been active.

Here is the uptime data summary:
- Total Nodes: ${totalNodes}
- Excellent Performance (90-100% uptime): ${excellentNodes}
- Good Performance (70-90% uptime): ${goodNodes}
- Average Performance (40-70% uptime): ${averageNodes}
- Poor Performance (0-40% uptime): ${poorNodes}
- Stopped Nodes (0% uptime): ${stoppedNodes}

Based on this data, provide a brief and accurate summary of the overall status of all devices. Do not mention individual node names. The response should be in plain text without any markdown symbols or formatting.

Ensure the summary is concise, grammatically correct, and logically coherent.
`;

  return prompt;
}

async function getOverallAnalysis(prompt) {
  try {
    const response = await fetch("http://localhost:3001/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.generatedText;
  } catch (error) {
    console.error("Error fetching overall analysis:", error);
    throw error;
  }
}
const OverallAnalysis = ({ uptimeData }) => {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Memoize the calculated uptime array to prevent recalculations on every render
  const uptimeArray = useMemo(() => calculateUptime(uptimeData), [uptimeData]);

  // Memoize the prompt construction
  const prompt = useMemo(
    () => constructOverallPrompt(uptimeArray),
    [uptimeArray]
  );

  // Define the debounced fetch function using useCallback to prevent recreation on every render
  const debouncedFetchAnalysis = useCallback(
    debounce(async (currentPrompt) => {
      setLoading(true);
      setError(null);
      try {
        const geminiResponse = await getOverallAnalysis(currentPrompt);
        setAnalysis(geminiResponse);
      } catch (err) {
        setError("Failed to fetch overall analysis.");
      } finally {
        setLoading(false);
      }
    }, 1000), // 1-second debounce
    [] // Empty dependency array ensures this function is created only once
  );

  useEffect(() => {
    if (uptimeArray.length === 0) {
      setAnalysis("No uptime data available to generate an analysis.");
      return;
    }

    // Call the debounced fetch function with the current prompt
    debouncedFetchAnalysis(prompt);

    // Cleanup function to cancel the debounce on unmount or when dependencies change
    return () => {
      debouncedFetchAnalysis.cancel();
    };
  }, [prompt, debouncedFetchAnalysis, uptimeArray.length]); // Dependencies are prompt and debouncedFetchAnalysis

  return (
    <div className="overall-analysis">
      {loading && <p>Loading analysis...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && analysis && <p>{analysis}</p>}
    </div>
  );
};

export default OverallAnalysis;
