import { useState, useEffect } from "react";
import Control from "./Control";
import DisplayNodes from "./DisplayNodes";
import Stats from "./Stats";
import DetailedNode from "./DetailedNode";

const Info = ({isSidebarOpen, toggleSidebar}) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [longData, setLongData] = useState({
    tank: {},
    borewell: {},
    water: {},
  });

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
            longData = {longData}
            setLongData = {setLongData}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div>
          <div className="nodes mt-5 h-[80vh] overflow-scroll overflow-x-hidden pb-1">
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
