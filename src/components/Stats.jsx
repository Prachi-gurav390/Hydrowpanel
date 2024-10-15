// import React from "react";
// import { useSelector } from "react-redux";

// const Stats = () => {
//   const activeCount = useSelector((state) => state.counter.activeCount);
//   const inactiveCount = useSelector((state) => state.counter.inactiveCount);

//   return (
//     <div className="flex flex-col md:flex-row md:flex-wrap gap-6 pt-4 mr-2">
//       <div className="statbox w-[23%]">
//         <div className="statbox1">
//           <div className="box3image">
//             <span>
//               <svg
//                 fill="#ffffff"
//                 version="1.1"
//                 id="Capa_1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 width="24px"
//                 height="24px"
//                 viewBox="0 0 53.24 53.24"
//                 xmlSpace="preserve"
//               >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   {" "}
//                   <g>
//                     {" "}
//                     <g>
//                       {" "}
//                       <path d="M27.251,26.193c2.629,0,4.967-2.253,5.907-3.295c-0.94-1.042-3.278-3.296-5.907-3.296c-2.64,0-4.972,2.253-5.909,3.295 C22.281,23.938,24.62,26.193,27.251,26.193z M27.251,20.498c1.325,0,2.399,1.074,2.399,2.4s-1.074,2.4-2.399,2.4 s-2.4-1.074-2.4-2.4S25.925,20.498,27.251,20.498z"></path>{" "}
//                       <path d="M26.62,0C11.919,0,0,11.918,0,26.619C0,41.322,11.919,53.24,26.62,53.24S53.24,41.322,53.24,26.619 C53.24,11.918,41.32,0,26.62,0z M14.609,27.393c0-7.428,5.671-13.471,12.642-13.471c6.877,0,12.547,5.96,12.64,13.285l0.002,0.369 c0,3.006-6.554,4.375-12.642,4.375s-12.642-1.369-12.642-4.375V27.393z M26.398,9.435c0-0.472,0.382-0.854,0.853-0.854 c8.489,0,15.396,6.423,15.396,14.316c0,0.472-0.382,0.854-0.854,0.854c-0.473,0-0.854-0.382-0.854-0.854 c0-6.953-6.142-12.609-13.688-12.609C26.779,10.289,26.398,9.907,26.398,9.435z M43.254,42.338 c-0.872,1.268-2.455,2.043-4.705,2.303c-2.675,0.309-6.793,0.485-11.299,0.485c-4.506,0-8.624-0.177-11.299-0.485 c-2.25-0.26-3.833-1.035-4.705-2.303c-0.866-1.262-0.714-2.594-0.638-3.005c0.009-7.239,1.109-10.976,1.157-11.132 c0.123-0.405,0.526-0.654,0.941-0.598c0.419,0.062,0.729,0.42,0.729,0.844c0,1.642,5.256,3.931,13.815,3.931 c8.559,0,13.814-2.289,13.814-3.931c0-0.424,0.31-0.782,0.729-0.844c0.416-0.058,0.818,0.191,0.941,0.598 c0.047,0.156,1.147,3.893,1.156,11.132C43.968,39.744,44.119,41.078,43.254,42.338z M44.922,23.752 c-0.471,0-0.854-0.382-0.854-0.854c0-8.877-7.545-16.1-16.817-16.1c-0.471,0-0.853-0.382-0.853-0.854S26.78,5.09,27.251,5.09 c10.215,0,18.524,7.987,18.524,17.807C45.775,23.37,45.395,23.752,44.922,23.752z"></path>{" "}
//                     </g>{" "}
//                   </g>{" "}
//                 </g>
//               </svg>
//             </span>
//           </div>
//           <div className="box1text text-right">
//             <span className="box1text1">Total devices</span>
//             <h4 className="box1text2">{inactiveCount + activeCount}</h4>
//           </div>
//         </div>
//         <hr className="statbox2" />
//         <div className="statbox3">
//           <p className="box3text1">
//             <span className="box3text2"></span> just updated
//           </p>
//         </div>
//       </div>
//       <div className="statbox w-[23%]">
//         <div className="statbox1">
//           <div className="box1image">
//             <span>
//               <svg
//                 fill="#ffffff"
//                 version="1.1"
//                 id="Capa_1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 width="24px"
//                 height="24px"
//                 viewBox="0 0 53.24 53.24"
//                 xmlSpace="preserve"
//               >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   {" "}
//                   <g>
//                     {" "}
//                     <g>
//                       {" "}
//                       <path d="M27.251,26.193c2.629,0,4.967-2.253,5.907-3.295c-0.94-1.042-3.278-3.296-5.907-3.296c-2.64,0-4.972,2.253-5.909,3.295 C22.281,23.938,24.62,26.193,27.251,26.193z M27.251,20.498c1.325,0,2.399,1.074,2.399,2.4s-1.074,2.4-2.399,2.4 s-2.4-1.074-2.4-2.4S25.925,20.498,27.251,20.498z"></path>{" "}
//                       <path d="M26.62,0C11.919,0,0,11.918,0,26.619C0,41.322,11.919,53.24,26.62,53.24S53.24,41.322,53.24,26.619 C53.24,11.918,41.32,0,26.62,0z M14.609,27.393c0-7.428,5.671-13.471,12.642-13.471c6.877,0,12.547,5.96,12.64,13.285l0.002,0.369 c0,3.006-6.554,4.375-12.642,4.375s-12.642-1.369-12.642-4.375V27.393z M26.398,9.435c0-0.472,0.382-0.854,0.853-0.854 c8.489,0,15.396,6.423,15.396,14.316c0,0.472-0.382,0.854-0.854,0.854c-0.473,0-0.854-0.382-0.854-0.854 c0-6.953-6.142-12.609-13.688-12.609C26.779,10.289,26.398,9.907,26.398,9.435z M43.254,42.338 c-0.872,1.268-2.455,2.043-4.705,2.303c-2.675,0.309-6.793,0.485-11.299,0.485c-4.506,0-8.624-0.177-11.299-0.485 c-2.25-0.26-3.833-1.035-4.705-2.303c-0.866-1.262-0.714-2.594-0.638-3.005c0.009-7.239,1.109-10.976,1.157-11.132 c0.123-0.405,0.526-0.654,0.941-0.598c0.419,0.062,0.729,0.42,0.729,0.844c0,1.642,5.256,3.931,13.815,3.931 c8.559,0,13.814-2.289,13.814-3.931c0-0.424,0.31-0.782,0.729-0.844c0.416-0.058,0.818,0.191,0.941,0.598 c0.047,0.156,1.147,3.893,1.156,11.132C43.968,39.744,44.119,41.078,43.254,42.338z M44.922,23.752 c-0.471,0-0.854-0.382-0.854-0.854c0-8.877-7.545-16.1-16.817-16.1c-0.471,0-0.853-0.382-0.853-0.854S26.78,5.09,27.251,5.09 c10.215,0,18.524,7.987,18.524,17.807C45.775,23.37,45.395,23.752,44.922,23.752z"></path>{" "}
//                     </g>{" "}
//                   </g>{" "}
//                 </g>
//               </svg>
//             </span>
//           </div>
//           <div className="box1text text-right">
//             <span className="box1text1">Active Devices</span>
//             <h4 className="box1text2">{activeCount}</h4>
//           </div>
//         </div>
//         <hr className="statbox2" />
//         <div className="statbox3">
//           <p className="box3text1">
//             <span className="box3text2"></span> just updated
//           </p>
//         </div>
//       </div>
//       <div className="statbox w-[23%]">
//         <div className="statbox1">
//           <div className="box2image">
//             <span>
//               <svg
//                 fill="#ffffff"
//                 version="1.1"
//                 id="Capa_1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 width="24px"
//                 height="24px"
//                 viewBox="0 0 53.24 53.24"
//                 xmlSpace="preserve"
//               >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   {" "}
//                   <g>
//                     {" "}
//                     <g>
//                       {" "}
//                       <path d="M27.251,26.193c2.629,0,4.967-2.253,5.907-3.295c-0.94-1.042-3.278-3.296-5.907-3.296c-2.64,0-4.972,2.253-5.909,3.295 C22.281,23.938,24.62,26.193,27.251,26.193z M27.251,20.498c1.325,0,2.399,1.074,2.399,2.4s-1.074,2.4-2.399,2.4 s-2.4-1.074-2.4-2.4S25.925,20.498,27.251,20.498z"></path>{" "}
//                       <path d="M26.62,0C11.919,0,0,11.918,0,26.619C0,41.322,11.919,53.24,26.62,53.24S53.24,41.322,53.24,26.619 C53.24,11.918,41.32,0,26.62,0z M14.609,27.393c0-7.428,5.671-13.471,12.642-13.471c6.877,0,12.547,5.96,12.64,13.285l0.002,0.369 c0,3.006-6.554,4.375-12.642,4.375s-12.642-1.369-12.642-4.375V27.393z M26.398,9.435c0-0.472,0.382-0.854,0.853-0.854 c8.489,0,15.396,6.423,15.396,14.316c0,0.472-0.382,0.854-0.854,0.854c-0.473,0-0.854-0.382-0.854-0.854 c0-6.953-6.142-12.609-13.688-12.609C26.779,10.289,26.398,9.907,26.398,9.435z M43.254,42.338 c-0.872,1.268-2.455,2.043-4.705,2.303c-2.675,0.309-6.793,0.485-11.299,0.485c-4.506,0-8.624-0.177-11.299-0.485 c-2.25-0.26-3.833-1.035-4.705-2.303c-0.866-1.262-0.714-2.594-0.638-3.005c0.009-7.239,1.109-10.976,1.157-11.132 c0.123-0.405,0.526-0.654,0.941-0.598c0.419,0.062,0.729,0.42,0.729,0.844c0,1.642,5.256,3.931,13.815,3.931 c8.559,0,13.814-2.289,13.814-3.931c0-0.424,0.31-0.782,0.729-0.844c0.416-0.058,0.818,0.191,0.941,0.598 c0.047,0.156,1.147,3.893,1.156,11.132C43.968,39.744,44.119,41.078,43.254,42.338z M44.922,23.752 c-0.471,0-0.854-0.382-0.854-0.854c0-8.877-7.545-16.1-16.817-16.1c-0.471,0-0.853-0.382-0.853-0.854S26.78,5.09,27.251,5.09 c10.215,0,18.524,7.987,18.524,17.807C45.775,23.37,45.395,23.752,44.922,23.752z"></path>{" "}
//                     </g>{" "}
//                   </g>{" "}
//                 </g>
//               </svg>
//             </span>
//           </div>
//           <div className="box1text text-right">
//             <span className="box1text1">Inactive Devices</span>
//             <h4 className="box1text2">{inactiveCount}</h4>
//           </div>
//         </div>
//         <hr className="statbox2" />
//         <div className="statbox3">
//           <p className="box3text1">
//             <span className="box3text2"></span> just updated
//           </p>
//         </div>
//       </div>
//       <div className="statbox w-[23%]">
//         <div className="statbox1">
//           <div className="box3image">
//             <span className="">
//               <svg
//                 fill="#ffffff"
//                 width="24px"
//                 height="24px"
//                 viewBox="0 0 32 32"
//                 style={{
//                   fillRule: "evenodd",
//                   clipRule: "evenodd",
//                   strokeLinejoin: "round",
//                   strokeMiterlimit: 2,
//                 }}
//                 version="1.1"
//                 xmlSpace="preserve"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsserif="http://www.serif.com/"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 role="img"
//                 aria-label="Bar chart icon"
//               >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   <path d="M29,10c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l-0,18c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l-0,-18Zm-20,6c-0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l-0,12c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l-0,-12Zm10,-12c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l-0,24c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l-0,-24Z"></path>
//                   <g id="Icon"></g>
//                 </g>
//               </svg>
//             </span>
//           </div>
//           <div className="box1text text-right">
//             <span className="box1text1">Today's Users</span>
//             <h4 className="box1text2">3</h4>
//           </div>
//         </div>
//         <hr className="statbox2" />
//         <div className="statbox3">
//           <p className="box3text1">
//             <span className="box3text2">+2% </span> than yesterday
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;


import React from "react";
import { useSelector } from "react-redux";

const Stats = () => {
  const activeCount = useSelector((state) => state.counter.activeCount);
  const inactiveCount = useSelector((state) => state.counter.inactiveCount);

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-6 pt-4 mr-2">
      <div className="statbox w-[23%]">
        <div className="statbox1">
          <div className="box3image">
            <span>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 53.24 53.24"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M27.251,26.193c2.629,0,4.967-2.253,5.907-3.295c-0.94-1.042-3.278-3.296-5.907-3.296c-2.64,0-4.972,2.253-5.909,3.295 C22.281,23.938,24.62,26.193,27.251,26.193z M27.251,20.498c1.325,0,2.399,1.074,2.399,2.4s-1.074,2.4-2.399,2.4 s-2.4-1.074-2.4-2.4S25.925,20.498,27.251,20.498z"></path>{" "}
                      <path d="M26.62,0C11.919,0,0,11.918,0,26.619C0,41.322,11.919,53.24,26.62,53.24S53.24,41.322,53.24,26.619 C53.24,11.918,41.32,0,26.62,0z M14.609,27.393c0-7.428,5.671-13.471,12.642-13.471c6.877,0,12.547,5.96,12.64,13.285l0.002,0.369 c0,3.006-6.554,4.375-12.642,4.375s-12.642-1.369-12.642-4.375V27.393z M26.398,9.435c0-0.472,0.382-0.854,0.853-0.854 c8.489,0,15.396,6.423,15.396,14.316c0,0.472-0.382,0.854-0.854,0.854c-0.473,0-0.854-0.382-0.854-0.854 c0-6.953-6.142-12.609-13.688-12.609C26.779,10.289,26.398,9.907,26.398,9.435z M43.254,42.338 c-0.872,1.268-2.455,2.043-4.705,2.303c-2.675,0.309-6.793,0.485-11.299,0.485c-4.506,0-8.624-0.177-11.299-0.485 c-2.25-0.26-3.833-1.035-4.705-2.303c-0.866-1.262-0.714-2.594-0.638-3.005c0.009-7.239,1.109-10.976,1.157-11.132 c0.123-0.405,0.526-0.654,0.941-0.598c0.419,0.062,0.729,0.42,0.729,0.844c0,1.642,5.256,3.931,13.815,3.931 c8.559,0,13.814-2.289,13.814-3.931c0-0.424,0.31-0.782,0.729-0.844c0.416-0.058,0.818,0.191,0.941,0.598 c0.047,0.156,1.147,3.893,1.156,11.132C43.968,39.744,44.119,41.078,43.254,42.338z M44.922,23.752 c-0.471,0-0.854-0.382-0.854-0.854c0-8.877-7.545-16.1-16.817-16.1c-0.471,0-0.853-0.382-0.853-0.854S26.78,5.09,27.251,5.09 c10.215,0,18.524,7.987,18.524,17.807C45.775,23.37,45.395,23.752,44.922,23.752z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
          </div>
          <div className="box1text text-right">
            <span className="box1text1">Total devices</span>
            <h4 className="box1text2">{inactiveCount + activeCount}</h4>
          </div>
        </div>
        <hr className="statbox2" />
        <div className="statbox3">
          <p className="box3text1">
            <span className="box3text2"></span> just updated
          </p>
        </div>
      </div>
      <div className="statbox w-[23%]">
        <div className="statbox1">
          <div className="box1image">
            <span>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 53.24 53.24"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M27.251,26.193c2.629,0,4.967-2.253,5.907-3.295c-0.94-1.042-3.278-3.296-5.907-3.296c-2.64,0-4.972,2.253-5.909,3.295 C22.281,23.938,24.62,26.193,27.251,26.193z M27.251,20.498c1.325,0,2.399,1.074,2.399,2.4s-1.074,2.4-2.399,2.4 s-2.4-1.074-2.4-2.4S25.925,20.498,27.251,20.498z"></path>{" "}
                      <path d="M26.62,0C11.919,0,0,11.918,0,26.619C0,41.322,11.919,53.24,26.62,53.24S53.24,41.322,53.24,26.619 C53.24,11.918,41.32,0,26.62,0z M14.609,27.393c0-7.428,5.671-13.471,12.642-13.471c6.877,0,12.547,5.96,12.64,13.285l0.002,0.369 c0,3.006-6.554,4.375-12.642,4.375s-12.642-1.369-12.642-4.375V27.393z M26.398,9.435c0-0.472,0.382-0.854,0.853-0.854 c8.489,0,15.396,6.423,15.396,14.316c0,0.472-0.382,0.854-0.854,0.854c-0.473,0-0.854-0.382-0.854-0.854 c0-6.953-6.142-12.609-13.688-12.609C26.779,10.289,26.398,9.907,26.398,9.435z M43.254,42.338 c-0.872,1.268-2.455,2.043-4.705,2.303c-2.675,0.309-6.793,0.485-11.299,0.485c-4.506,0-8.624-0.177-11.299-0.485 c-2.25-0.26-3.833-1.035-4.705-2.303c-0.866-1.262-0.714-2.594-0.638-3.005c0.009-7.239,1.109-10.976,1.157-11.132 c0.123-0.405,0.526-0.654,0.941-0.598c0.419,0.062,0.729,0.42,0.729,0.844c0,1.642,5.256,3.931,13.815,3.931 c8.559,0,13.814-2.289,13.814-3.931c0-0.424,0.31-0.782,0.729-0.844c0.416-0.058,0.818,0.191,0.941,0.598 c0.047,0.156,1.147,3.893,1.156,11.132C43.968,39.744,44.119,41.078,43.254,42.338z M44.922,23.752 c-0.471,0-0.854-0.382-0.854-0.854c0-8.877-7.545-16.1-16.817-16.1c-0.471,0-0.853-0.382-0.853-0.854S26.78,5.09,27.251,5.09 c10.215,0,18.524,7.987,18.524,17.807C45.775,23.37,45.395,23.752,44.922,23.752z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
          </div>
          <div className="box1text text-right">
            <span className="box1text1">Active Devices</span>
            <h4 className="box1text2">{activeCount}</h4>
          </div>
        </div>
        <hr className="statbox2" />
        <div className="statbox3">
          <p className="box3text1">
            <span className="box3text2"></span> just updated
          </p>
        </div>
      </div>
      <div className="statbox w-[23%]">
        <div className="statbox1">
          <div className="box2image">
            <span>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 53.24 53.24"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M27.251,26.193c2.629,0,4.967-2.253,5.907-3.295c-0.94-1.042-3.278-3.296-5.907-3.296c-2.64,0-4.972,2.253-5.909,3.295 C22.281,23.938,24.62,26.193,27.251,26.193z M27.251,20.498c1.325,0,2.399,1.074,2.399,2.4s-1.074,2.4-2.399,2.4 s-2.4-1.074-2.4-2.4S25.925,20.498,27.251,20.498z"></path>{" "}
                      <path d="M26.62,0C11.919,0,0,11.918,0,26.619C0,41.322,11.919,53.24,26.62,53.24S53.24,41.322,53.24,26.619 C53.24,11.918,41.32,0,26.62,0z M14.609,27.393c0-7.428,5.671-13.471,12.642-13.471c6.877,0,12.547,5.96,12.64,13.285l0.002,0.369 c0,3.006-6.554,4.375-12.642,4.375s-12.642-1.369-12.642-4.375V27.393z M26.398,9.435c0-0.472,0.382-0.854,0.853-0.854 c8.489,0,15.396,6.423,15.396,14.316c0,0.472-0.382,0.854-0.854,0.854c-0.473,0-0.854-0.382-0.854-0.854 c0-6.953-6.142-12.609-13.688-12.609C26.779,10.289,26.398,9.907,26.398,9.435z M43.254,42.338 c-0.872,1.268-2.455,2.043-4.705,2.303c-2.675,0.309-6.793,0.485-11.299,0.485c-4.506,0-8.624-0.177-11.299-0.485 c-2.25-0.26-3.833-1.035-4.705-2.303c-0.866-1.262-0.714-2.594-0.638-3.005c0.009-7.239,1.109-10.976,1.157-11.132 c0.123-0.405,0.526-0.654,0.941-0.598c0.419,0.062,0.729,0.42,0.729,0.844c0,1.642,5.256,3.931,13.815,3.931 c8.559,0,13.814-2.289,13.814-3.931c0-0.424,0.31-0.782,0.729-0.844c0.416-0.058,0.818,0.191,0.941,0.598 c0.047,0.156,1.147,3.893,1.156,11.132C43.968,39.744,44.119,41.078,43.254,42.338z M44.922,23.752 c-0.471,0-0.854-0.382-0.854-0.854c0-8.877-7.545-16.1-16.817-16.1c-0.471,0-0.853-0.382-0.853-0.854S26.78,5.09,27.251,5.09 c10.215,0,18.524,7.987,18.524,17.807C45.775,23.37,45.395,23.752,44.922,23.752z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
          </div>
          <div className="box1text text-right">
            <span className="box1text1">Inactive Devices</span>
            <h4 className="box1text2">{inactiveCount}</h4>
          </div>
        </div>
        <hr className="statbox2" />
        <div className="statbox3">
          <p className="box3text1">
            <span className="box3text2"></span> just updated
          </p>
        </div>
      </div>
      {/* <div className="statbox w-[23%]">
        <div className="statbox1">
          <div className="box3image">
            <span className="">
              <svg
                fill="#ffffff"
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsserif="http://www.serif.com/"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img"
                aria-label="Bar chart icon"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M29,10c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l-0,18c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l-0,-18Zm-20,6c-0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l-0,12c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l-0,-12Zm10,-12c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l-0,24c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l-0,-24Z"></path>
                  <g id="Icon"></g>
                </g>
              </svg>
            </span>
          </div>
          <div className="box1text text-right">
            <span className="box1text1">Today's Users</span>
            <h4 className="box1text2">3</h4>
          </div>
        </div>
        <hr className="statbox2" />
        <div className="statbox3">
          <p className="box3text1">
            <span className="box3text2">+2% </span> than yesterday
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Stats;
