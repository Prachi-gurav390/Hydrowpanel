import React, { useMemo, useState, useCallback } from "react";
import PropTypes from 'prop-types';

const CircularUptimeGraph = ({
  mdata = {},
  width = 600,
  height = 600,
  radius = 250,
  centerX = 300,
  centerY = 300,
  nodeRadius = 5,
  rings = [
    { name: "High Uptime", min: 90, max: 100, color: "#00c853" },
    { name: "Medium Uptime", min: 70, max: 89, color: "#ffeb3b" },
    { name: "Low Uptime", min: 50, max: 69, color: "#ff9800" },
    { name: "Critical Uptime", min: 0, max: 49, color: "#d50000" },
  ],
}) => {
  // Function to calculate uptime
  const calculateUptime = (data) => {
    const result = [];

    // Iterate over each category (e.g., tank, borewell, water)
    for (const category in data) {
      if (Object.hasOwnProperty.call(data, category)) {
        const nodes = data[category];

        // Iterate over each node within the category
        for (const nodeName in nodes) {
          if (Object.hasOwnProperty.call(nodes, nodeName)) {
            const statuses = nodes[nodeName];
            const total = statuses.length;
            const trueCount = statuses.filter(status => status === true).length;

            // Calculate uptime percentage as a number
            const uptimePercentage = ((trueCount / total) * 100).toFixed(2);

            // Push the result object to the array
            result.push({
              nodeName,
              uptime: parseFloat(uptimePercentage),
            });
          }
        }
      }
    }

    return result;
  };

  const data = useMemo(() => calculateUptime(mdata), [mdata]);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Function to assign nodes to rings based on uptime
  const assignedRings = useMemo(() => {
    const ringAssignments = rings.map(ring => ({
      ...ring,
      nodes: [],
    }));

    data.forEach(node => {
      const ring = ringAssignments.find(r => node.uptime >= r.min && node.uptime <= r.max);
      if (ring) {
        ring.nodes.push(node);
      }
    });

    return ringAssignments.filter(ring => ring.nodes.length > 0);
  }, [data, rings]);

  // Function to position nodes within their assigned rings
  const nodePositions = useMemo(() => {
    const positions = [];
    const totalRings = assignedRings.length;

    assignedRings.forEach((ring, ringIndex) => {
      const ringRadius = (radius / (rings.length + 1)) * (ringIndex + 1); // Evenly space rings
      const nodeCount = ring.nodes.length;
      const angleStep = (2 * Math.PI) / nodeCount;

      ring.nodes.forEach((node, nodeIndex) => {
        const angle = angleStep * nodeIndex; // Evenly distribute nodes in the ring
        const x = centerX + ringRadius * Math.cos(angle);
        const y = centerY + ringRadius * Math.sin(angle);
        positions.push({ x, y, node });
      });
    });

    return positions;
  }, [assignedRings, radius, centerX, centerY, rings.length]);

  const handleMouseEnter = useCallback((node) => {
    setHoveredNode(node);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredNode(null);
  }, []);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
          {rings.map((ring, index) => (
            <stop
              key={index}
              offset={`${(ring.max / 100) * 100}%`}
              stopColor={ring.color}
            />
          ))}
        </radialGradient>
      </defs>
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="url(#uptimeGradient)"
      />
      {nodePositions.map(({ x, y, node }, index) => (
        <g key={index}>
          <circle
            cx={x}
            cy={y}
            r={nodeRadius}
            fill={rings.find(r => node.uptime >= r.min && node.uptime <= r.max).color}
            stroke="black"
            strokeWidth="1"
            onMouseEnter={() => handleMouseEnter({ ...node, x, y })}
            onMouseLeave={handleMouseLeave}
          />
        </g>
      ))}
      {hoveredNode && (
        <g>
          {/* Tooltip positioning logic */}
          <foreignObject
            x={hoveredNode.x + 10}
            y={hoveredNode.y - 25}
            width="140"
            height="50"
          >
            <div style={{
              background: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '5px',
              pointerEvents: 'none',
              fontSize: '12px',
              boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
            }}>
              <strong>{hoveredNode.nodeName}</strong><br />
              Uptime: {hoveredNode.uptime}%
            </div>
          </foreignObject>
        </g>
      )}
    </svg>
  );
};

export default CircularUptimeGraph;
