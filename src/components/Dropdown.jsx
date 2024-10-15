// // const Dropdown = ({ options, selectedOption, onChange }) => {
// //   return (
// //     <div className="relative inline-block w-[10vw]">
// //       <select
// //         value={selectedOption}
// //         onChange={(e) => onChange(e.target.value)}
// //         style={{ color: "rgb(52, 71, 103)" }}
// //         className="block appearance-none w-full border border-gray-200 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
// //       >
// //         {options.map((option, index) => (
// //           <option key={index} value={option}>
// //             {option}
// //           </option>
// //         ))}
// //       </select>
// //       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2" style={{ color: "rgb(52, 71, 103)" }}>
// //         <svg
// //           className="fill-current h-4 w-4"
// //           xmlns="http://www.w3.org/2000/svg"
// //           viewBox="0 0 20 20"
// //         >
// //           <path d="M10 12l-4-4h8l-4 4z" />
// //         </svg>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dropdown;



// import React from "react";

// const Dropdown = ({ label, options, selectedOption, onChange }) => {
//   return (
//     <div className="relative inline-block w-[10vw]">
//       <select
//         value={selectedOption}
//         onChange={(e) => onChange(e.target.value)}
//         className="bg-transparent bg-block appearance-none w-full dropdown px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//       >
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <div
//         className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
//         style={{ color: "rgb(52, 71, 103)" }}
//       >
//         <svg
//           className="dropdownsvg h-4 w-4"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path d="M10 12l-4-4h8l-4 4z" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

import React from "react";

const Dropdown = ({ label, options, selectedOption, onChange }) => {
  return (
    <div className="relative inline-block w-[10vw]">
      <select
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent bg-block appearance-none w-full dropdown px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
        style={{ color: "rgb(52, 71, 103)" }}
      >
        <svg
          className="dropdownsvg h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-4-4h8l-4 4z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
