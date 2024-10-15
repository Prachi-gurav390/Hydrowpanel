// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeProvider";
// const ThemeToggle = ({ onClose }) => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const handleClose = () => {
//     onClose();
//   };
//   return (
//     <header className="header">
//       <h1><button onClick={handleClose}>X</button></h1>
//       <button onClick={toggleTheme}>
//         Switch to {theme === "light" ? "Dark" : "Light"} Theme
//       </button>
//     </header>
//   );
// };

// export default ThemeToggle;

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggle = ({ onClose }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // const handleClose = () => {
  //   onClose();
  // };

  return (
    <header className="header flex items-center">
      {/* <h1>
        <button onClick={handleClose}>X</button>
      </h1> */}
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </header>
  );
};

export default ThemeToggle;
