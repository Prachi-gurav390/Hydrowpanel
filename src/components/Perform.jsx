import React from "react";
import OverallAnalysis from "./OverAllAnalysis";
import Chart from "./Chart";
import Chart2 from "./Chart2";
import { useState, useEffect } from "react";

const Perform = ({ onClose, longData, setLongData }) => {
  const handleClose = () => {
    onClose();
  };
  const [gradient, setGradient] = useState("greenRed");

  const handleGradientChange = (e) => {
    setGradient(e.target.value);
  };
  return (
    <div className=" relative z-20">
      <div className="flex flex-col items-center ">
        <div className="perfbox flex flex-col items-center bg-perf p-5 w-[80%] rounded-lg">
          <div className="flex justify-between w-[80%]">
            <div></div>
            <h1 className="text-xl summary">Node Performance Index</h1>
            <button onClick={handleClose}>
              <svg
                className="close-icon perfbtn"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="rgba(255, 255, 255, 0.8)"
                // stroke="#344767"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                  fill="rgba(255, 255, 255, 0.8)"
                  // fill="#344767"
                />
              </svg>
            </button>
          </div>
          <Chart data={longData} gradientType={gradient} />
          <OverallAnalysis uptimeData={longData} />
        </div>
      </div>
    </div>
  );
};

export default Perform;
