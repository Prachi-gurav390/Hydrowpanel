import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled-component for Tooltip
const Tooltip = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  pointer-events: none;
  font-size: 14px;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`;

const CircularUptimeGraph = ({
  data,
  width = 500,
  height = 500,
  graphPadding = 30, // Controls padding between graph and SVG border
  nodePadding = 10,    // Controls padding between nodes and graph's outer edge
  gradientType = 'greenYellowOrangeRed', // Determines which gradient to apply
}) => {
  // Define gradient configurations
  const gradientDefinitions = {
    greenRed: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#006400" /> {/* 100% - Dark Green */}
        <stop offset="50%" stopColor="#32CD32" /> {/* 50% - Lime Green */}
        <stop offset="100%" stopColor="#FF0000" /> {/* 0% - Red */}
      </radialGradient>
    ),
    greenYellowRed: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#006400" /> {/* 100% - Dark Green */}
        <stop offset="35%" stopColor="#66FF66" /> {/* 70% - Light Green */}
        <stop offset="50%" stopColor="#FFD700" /> {/* 50% - Gold (Yellow) */}
        <stop offset="65%" stopColor="#FF8C00" /> {/* 30% - Dark Orange */}
        <stop offset="100%" stopColor="#FF0000" /> {/* 0% - Red */}
      </radialGradient>
    ),
    greenYellowOrangeRed: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#006400" /> {/* 100% - Dark Green */}
        <stop offset="25%" stopColor="#32CD32" /> {/* 75% - Lime Green */}
        <stop offset="45%" stopColor="#FFD700" /> {/* 55% - Gold (Yellow) */}
        <stop offset="65%" stopColor="#FF8C00" /> {/* 35% - Dark Orange */}
        <stop offset="100%" stopColor="#FF0000" /> {/* 0% - Red */}
      </radialGradient>
    ),
    blueYellowRed: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00008B" /> {/* 100% - Dark Blue */}
        <stop offset="35%" stopColor="#4682B4" /> {/* 70% - Steel Blue */}
        <stop offset="50%" stopColor="#FFD700" /> {/* 50% - Gold (Yellow) */}
        <stop offset="65%" stopColor="#FF8C00" /> {/* 30% - Dark Orange */}
        <stop offset="100%" stopColor="#FF0000" /> {/* 0% - Red */}
      </radialGradient>
    ),
    blueGreenYellowRed: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00008B" /> {/* 100% - Dark Blue */}
        <stop offset="25%" stopColor="#008000" /> {/* 75% - Green */}
        <stop offset="45%" stopColor="#32CD32" /> {/* 55% - Lime Green */}
        <stop offset="65%" stopColor="#FFD700" /> {/* 35% - Gold (Yellow) */}
        <stop offset="80%" stopColor="#FF8C00" /> {/* 20% - Dark Orange */}
        <stop offset="100%" stopColor="#FF0000" /> {/* 0% - Red */}
      </radialGradient>
    ),
    navyTealGreenRed: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1a202c" /> {/* 100% - Navy */}
        <stop offset="20%" stopColor="#1f7872" /> {/* 80% - Teal */}
        <stop offset="40%" stopColor="#72b095" /> {/* 60% - Light Teal */}
        <stop offset="60%" stopColor="#bfb380" /> {/* 40% - Tan */}
        <stop offset="80%" stopColor="#e06666" /> {/* 20% - Medium Red */}
        <stop offset="100%" stopColor="#FF0000" /> {/* 0% - Red */}
      </radialGradient>
    ),
    lightToDarkGreen: (
      <radialGradient id="uptimeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#cce3a1" /> {/* 100% - Light Green */}
        <stop offset="25%" stopColor="#99cc66" /> {/* 75% - Medium Green */}
        <stop offset="50%" stopColor="#669900" /> {/* 50% - Darker Green */}
        <stop offset="75%" stopColor="#336600" /> {/* 25% - Dark Green */}
        <stop offset="100%" stopColor="#003300" /> {/* 0% - Very Dark Green */}
      </radialGradient>
    ),
  };

  // Calculate the center and radii
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(centerX, centerY) - graphPadding; // Adjusted padding
  const nodeMaxRadius = maxRadius - nodePadding; // Adjusted node padding
  const minRadius = 40; // Minimum radius to avoid crowding at the center

  // Data Processing: Calculate uptime percentages
  const calculateUptime = useCallback((data) => {
    const result = [];

    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const nodes = data[category];

        for (const nodeName in nodes) {
          if (nodes.hasOwnProperty(nodeName)) {
            const statuses = nodes[nodeName];
            const total = statuses.length;
            const trueCount = statuses.filter((status) => status === true).length;
            const uptimePercentage = (trueCount / total) * 100;

            result.push({
              nodeName,
              uptime: uptimePercentage,
            });
          }
        }
      }
    }

    return result;
  }, []);

  // Memoize uptime data to prevent unnecessary recalculations
  const uptimeData = useMemo(() => calculateUptime(data), [data, calculateUptime]);

  const totalNodes = uptimeData.length;

  // Calculate node size based on total nodes to prevent overlap
  const calculateNodeSize = useCallback(() => {
    const maxNodes = 100; // Define a threshold for maximum nodes
    if (totalNodes <= maxNodes) {
      return 4; // Default size
    }
    // Scale down node size as nodes increase
    return Math.max(2, 4 - Math.floor(totalNodes / 50));
  }, [totalNodes]);

  const nodeSize = calculateNodeSize();

  // Function to map uptime percentage to radius (higher uptime -> closer to center)
  const mapUptimeToRadius = useCallback(
    (uptimePercent) => {
      // Clamp uptimePercent between 0 and 100
      const clamped = Math.min(Math.max(uptimePercent, 0), 100);
      return minRadius + (nodeMaxRadius - minRadius) * (1 - clamped / 100);
    },
    [minRadius, nodeMaxRadius]
  );

  // Calculate node positions based on uptime with even angular distribution
  const calculateNodePositions = useCallback(() => {
    return uptimeData.map((node, index) => {
      const angle = (2 * Math.PI / totalNodes) * index - Math.PI / 2; // Start from top
      const radius = mapUptimeToRadius(node.uptime);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return {
        ...node,
        x,
        y,
      };
    });
  }, [uptimeData, totalNodes, centerX, centerY, mapUptimeToRadius]);

  // Collision detection and adjustment to prevent overlap
  const preventOverlap = useCallback((nodes) => {
    const adjustedNodes = [...nodes];
    const minDistance = nodeSize * 2 + 1; // +1 for padding

    for (let i = 0; i < adjustedNodes.length; i++) {
      for (let j = i + 1; j < adjustedNodes.length; j++) {
        const dx = adjustedNodes[i].x - adjustedNodes[j].x;
        const dy = adjustedNodes[i].y - adjustedNodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
          // Calculate angle of the line connecting nodes
          const angle = Math.atan2(dy, dx);

          // Calculate the overlap distance
          const overlap = minDistance - distance;

          // Adjust positions
          adjustedNodes[j].x += Math.cos(angle) * (overlap / 2);
          adjustedNodes[j].y += Math.sin(angle) * (overlap / 2);

          adjustedNodes[i].x -= Math.cos(angle) * (overlap / 2);
          adjustedNodes[i].y -= Math.sin(angle) * (overlap / 2);
        }
      }
    }

    return adjustedNodes;
  }, [nodeSize]);

  // Combine calculation and collision prevention
  const nodesWithPositions = useMemo(() => {
    const positions = calculateNodePositions();
    return preventOverlap(positions);
  }, [calculateNodePositions, preventOverlap]);

  // Tooltip state
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' });

  // Handler for mouse over and focus events
  const handleMouseOver = useCallback(
    (event, node) => {
      const svgRect = event.currentTarget.ownerSVGElement.getBoundingClientRect();
      let tooltipX = event.clientX - svgRect.left + 10;
      let tooltipY = event.clientY - svgRect.top + 10;

      // Estimated tooltip size
      const tooltipWidth = 150;
      const tooltipHeight = 50;

      // Boundary checks to prevent tooltip from overflowing
      if (tooltipX + tooltipWidth > width) {
        tooltipX -= tooltipWidth + 20;
      }
      if (tooltipY + tooltipHeight > height) {
        tooltipY -= tooltipHeight + 20;
      }

      setTooltip({
        visible: true,
        x: tooltipX,
        y: tooltipY,
        content: `${node.nodeName}: ${node.uptime.toFixed(2)}%`,
      });
    },
    [width, height]
  );

  // Handler for mouse out and blur events
  const handleMouseOut = useCallback(() => {
    setTooltip((prev) => ({
      ...prev,
      visible: false,
    }));
  }, []);

  return (
    <div style={{ position: 'relative', width, height }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
        {/* Define the selected gradient */}
        <defs>
          {gradientDefinitions[gradientType] || gradientDefinitions.greenYellowOrangeRed}
        </defs>

        {/* Background Circle with Gradient */}
        <circle
          cx={centerX}
          cy={centerY}
          r={maxRadius}
          fill="url(#uptimeGradient)"
        />

        {/* Concentric Circles for Reference */}
        {[...Array(5)].map((_, i) => {
          const r = (maxRadius / 5) * (i + 1);
          return (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={r}
              stroke="#ffffff55" // Slightly more opaque for better visibility
              strokeWidth="1"
              fill="none"
            />
          );
        })}

        {/* Render Nodes */}
        {nodesWithPositions.map((node, index) => (
          <g key={index}>
            <circle
              cx={node.x}
              cy={node.y}
              r={nodeSize}
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="1"
              onMouseOver={(e) => handleMouseOver(e, node)}
              onMouseOut={handleMouseOut}
              tabIndex="0"
              onFocus={(e) => handleMouseOver(e, node)}
              onBlur={handleMouseOut}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleMouseOver(e, node);
              }}
              aria-label={`${node.nodeName}: ${node.uptime.toFixed(2)}% uptime`}
              role="img"
            />
          </g>
        ))}
      </svg>

      {/* Custom Tooltip */}
      {tooltip.visible && (
        <Tooltip x={tooltip.x} y={tooltip.y}>
          {tooltip.content}
        </Tooltip>
      )}
    </div>
  );
};

// Define PropTypes for better type checking and documentation
CircularUptimeGraph.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.arrayOf(PropTypes.bool))
  ).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  graphPadding: PropTypes.number, // Controls padding between graph and SVG border
  nodePadding: PropTypes.number,  // Controls padding between nodes and graph's outer edge
  gradientType: PropTypes.oneOf([
    'greenRed',
    'greenYellowRed',
    'greenYellowOrangeRed',
    'blueYellowRed',
    'blueGreenYellowRed',
    'navyTealGreenRed',    // New Gradient 1
    'lightToDarkGreen',    // New Gradient 2
  ]), // Determines which gradient to apply
};

export default CircularUptimeGraph;
