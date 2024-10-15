// // src/App.jsx
// import React, { useEffect } from 'react';
// import Sidebar from './components/Sidebar';
// import Info from './components/Info';
// import Login from './components/Login'; // Import Login component
// import './index.css';

// // Redux Imports
// import { useSelector, useDispatch } from 'react-redux';
// import { loadUser } from './redux/authSlice';

// function App() {
//   // Access authentication state from Redux
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);

//   return (
//     <>
//       {!isLoggedIn ? (
//         // Render Login component if not logged in
//         <Login />
//       ) : (
//         // Render main application if logged in
//         <div className='bg-main h-[100vh] w-[100vw] flex'>
//           <div className='w-[23%] flex sidebarr justify-center content-center flex-wrap'>
//             <div className='h-[94%] w-[86%]'>
//               <Sidebar />
//             </div>
//           </div>
//           <div className='info w-[100%] bg-main'>
//             <Info />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;


// src/App.jsx
import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Info from "./components/Info";
import Login from "./components/Login"; // Import Login component
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";
// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./redux/authSlice";

function App() {
  // Access authentication state from Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {!isLoggedIn ? (
        // Render Login component if not logged in
        <Login />
      ) : (
        // Render main application if logged in
        <ThemeProvider>
          <div className="bg-main h-[100vh] w-[100vw] flex">
            <div className="w-[23%] flex sidebarr justify-center content-center flex-wrap">
              <div className="h-[94%] w-[86%]">
                <Sidebar />
              </div>
            </div>
            <div className="info w-[100%] bg-main">
              <Info />
            </div>
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
