import { useState, useEffect } from "react";
import Control from "./Control";
import DisplayNodes from "./DisplayNodes";
import Stats from "./Stats";
import DetailedNode from "./DetailedNode";
import OverallAnalysis from "./OverAllAnalysis";
import Chart from "./Chart";
import Chart2 from "./Chart2";
const Info = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [viewChart, setViewChart] = useState(false);
  const [longData, setLongData] = useState({
    tank: {},
    borewell: {},
    water: {},
  });

  const [gradient, setGradient] = useState("greenRed");

  const handleGradientChange = (e) => {
    setGradient(e.target.value);
  };
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[100%]">
        <div className="top mt-5 h-[9.5vh] flex justify-center items-center">
          <Control
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
          />
        </div>
        <div>
          <div className="nodes mt-5 h-[80vh] overflow-scroll overflow-x-hidden pb-1">
            <div className="ml-4 mb-2">
              {viewChart && !loading ? (
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center bg-perf p-5 w-[80%] rounded-lg">
                    <div className="flex justify-between w-[80%]">
                      <h1>Node Performance Index</h1>
                      <button onClick={() => setViewChart(false)}>Close</button>
                    </div>
                    <Chart data={longData} gradientType={gradient} />
                    <OverallAnalysis uptimeData={longData} />
                  </div>
                </div>
              ) : (
                <button className="performtext" onClick={() => setViewChart(true)}>
                  View Performance
                </button>
              )}
            </div>
            <div className="ml-4">{!loading && <Stats />}</div>
            <DisplayNodes
              selectedType={selectedType}
              selectedActivity={selectedActivity}
              setLoader={setLoading}
              setSelectedNode={setSelectedNode}
              setLongData={setLongData}
              selectedNode={selectedNode}
            />
            {/* Overlay DetailedNode component */}
          </div>
        </div>
      </div>
      {selectedNode && !loading && (
        <DetailedNode
          node={selectedNode}
          goBack={() => setSelectedNode(null)}
          data={longData}
        />
      )}
    </div>
  );
};

export default Info;
