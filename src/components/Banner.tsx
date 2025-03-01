// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // const sections = [
// //   { name: "Complete body", icon: "🚗" },
// //   { name: "Front", icon: "🔧" },
// //   { name: "Cabin", icon: "🛋️" },
// //   { name: "Trunk", icon: "📦" },
// //   { name: "Exterior", icon: "🌟" },
// // ];

// // export default function Banner() {
// //   // const [activeSection, setActiveSection] = useState("Complete body");
// //   const [highlight, setHighlight] = useState<"top" | "bottom" | null>(null);
// //   return (
// //     <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
      

// //       {/* Main Content */}
// //       <div className="w-full  grid grid-cols-1 md:grid  grid-cols-12 w-full ">
// //         {/* Left Section */}
// //         <div className="col-span-12 ">
// //           <h2 className="text-3xl text-center">
// //           Evolving the drive with 360-degree
// //           </h2>
// //           {/* <h2 className="text-3xl justify-center md:text-5xl mx-auto font-semibold text-center leading-tight">
// //             Evolving the drive with <span>360-degree</span>
// //             <br /> comprehensive solutions
// //           </h2> */}
// //           {/* <div className="mt-8">
// //             <p className="text-lg font-semibold">Passenger vehicles</p>
// //             <p className="text-gray-400">Revving up innovation from interior to exterior.</p>
// //           </div>
// //           <div className="mt-4 opacity-50">
// //             <p className="text-lg font-semibold">Commercial vehicles</p>
// //             <p className="text-gray-600">Advancing engineering for heavy-duty vehicles.</p>
// //           </div>
// //         </div> */}
// //         </div>
// //         <div className="flex items-center space-x-4 p-30 h-auto">
// //       {/* Left Side Content (Beside the Line) */}
// //       <div className="relative flex flex-col items-center h-32">
// //         {/* Upper Half */}
// //         <div
// //           className={`w-1 h-1/2 transition-colors ${
// //             highlight === "top" ? "bg-white-400" : "bg-gray-300"
// //           }`}
// //         >


// //         </div>
// //         {/* Lower Half */}
// //         <div
// //           className={`w-1 h-1/2 transition-colors ${
// //             highlight === "bottom" ? "bg-white-400" : "bg-gray"
// //           }`}
// //         >
         
// //         </div>
// //       </div>
// //       <div className="flex flex-col justify-between h-32 w-full">
// //         <button
// //           onClick={() => setHighlight("top")}
// //           className="px-4 py-2 bg-transparent text-white w-auto rounded"
// //         >
         

// //         </button>
// //         <button
// //           onClick={() => setHighlight("bottom")}
// //           className="px-4 py-2 bg-transparent text-white rounded"
// //         >
// //            <h2 className="text-left">Passenger vehicles</h2>
// //           <p className="text-left">Revving up innovation from</p>
// //           <p className="text-left">interior to exterior.</p>
// //         </button>
// //       </div>

// //       {/* Vertical Line */}
      
// //     </div>

// //         {/* Right Section (Image Placeholder) */}
// //         {/* <div className="flex justify-center relative">
// //           <motion.img
// //             src="/car-structure.png"
// //             alt="Car Structure"
// //             className="w-full max-w-md"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1 }}
// //           />
// //         </div> */}
// //       </div>

// //       {/* Navigation Tabs */}
// //       {/* <div className="flex gap-6 mt-8">
// //         {sections.map((section) => (
// //           <button
// //             key={section.name}
// //             className={`flex flex-col items-center text-sm px-3 py-2 rounded-lg transition duration-300 ${
// //               activeSection === section.name ? "text-blue-400" : "text-gray-400"
// //             }`}
// //             onClick={() => setActiveSection(section.name)}
// //           >
// //             <span className="text-lg">{section.icon}</span>
// //             {section.name}
// //           </button>
// //         ))}
// //       </div> */}
// //     </div>
// //   );
// // }

// import { useState, useRef, useEffect } from "react";

// export default function Banner() {
//   const [highlight, setHighlight] = useState<"top" | "bottom" | null>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [lineHeight, setLineHeight] = useState(0);
// console.log("ref")
//   // Adjust line height dynamically based on content
//   useEffect(() => {
//     if (contentRef.current) {
//       setLineHeight(contentRef.current.clientHeight);
//     }
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
//       {/* Main Content */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-12">
//         {/* Left Section */}
//         <div className="col-span-12 text-center m-6">
//           <h2 className="text-3xl mb-2">
//             Evolving the drive with <span className="font-bold">360-degree</span>
//           </h2>
//           <h2 className="text-3xl">
//           comprehensive solutions
//           </h2>
//           {/* comprehensive solutions */}
//         </div>

//         {/* Vertical Line with Content */}
//         <div className="flex items-center space-x-6 py-10 mx-20  col-span-6">
//           {/* Left Side Content (Beside the Line) */}
          

//           {/* Vertical Line (Height Adjusts Dynamically) */}
//           <div className="relative flex flex-col items-center"
          
//           >
//             <div
//               className={`w-1 transition-colors ${
//                 highlight === "top" ? "bg-white":"bg-gray-800"
//               }`}
//               style={{ height: lineHeight / 2 }}
//             ></div>
//             <div
//               className={`w-1 transition-colors ${
//                 highlight === "bottom" ?  "bg-white":"bg-gray-800"
//               }`}
//               style={{ height: lineHeight / 2 }}
//             ></div>
//           </div>

//           <div ref={contentRef} className="flex flex-col justify-between space-y-10  col-span-10">
//             {/* Top Content */}
//             <button
//               onClick={() => setHighlight("top")}
//               className={highlight === "top" ? "text-white text-left" : "text-gray text-left"}

//             >
//               <div    className={highlight === "top" ? "text-white text-left" : "text-gray text-left"}>
//                <h2 className="text-2xl m-2 font-semibold">Passenger Vehicles</h2>
//                <p className="text-sm m-2 font-base">Revving up innovation from </p>
//                <p className="text-sm m-2 font-base"> interior to exterior.</p>
//                </div>
//             </button>

//             {/* Bottom Content */}
//             <button
//               onClick={() => setHighlight("bottom")}
//               className="text-left w-full  transition"
//             >
//                <h2 className="text-2xl m-2 font-semibold">Commercial Vehicles</h2>
//                <p className="text-sm m-2 font-base">Advancing engineering </p>
//                <p className="text-sm m-2 font-base">for heavy-duty vehicles.</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useRef, useEffect } from "react";
import Veoverview from "./Vechicleoverview";
import completebody from '../assets/completebody.png'
import trnk from "../assets/trnk.png"
import front from "../assets/front.png"
import { useDispatch } from "react-redux";
import videoFullBody from "../assets/fullbody.mp4";
import videoFront from "../assets/front.mp4";
import videoCabin from "../assets/cabin.mp4";
import videoTrunk from "../assets/trunk.mp4";
import videoExterior from "../assets/exteriro.mp4";
import commfull from "../assets/commfull.mp4"
import { setcriteria,setcriteriaa } from "../redux/CounterSlice";
import exterior from "../assets/exterio.png"
import cabin from "../assets/cabin.png"
import { createBox } from "framer-motion";
export default function Banner() {
  const [highlight, setHighlight] = useState<"top" | "bottom" | null>(null);
  // const [citeria,Setcriteria]=useState<string>("")
  const disp=useDispatch()
  const contentRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLButtonElement>(null);
  const bottomRef = useRef<HTMLButtonElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [cat,Setcat]=useState<string>('')
  const [activeIndex, setActiveIndex] = useState(0);
  const videos = [
    { src: videoFullBody, label: "Full Body" },
    { src: videoCabin, label: "Cabin" },
    { src: videoTrunk, label: "Trunk" },
    { src: videoExterior, label: "Exterior" },
  ];
 
  // Adjust line height dynamically based on content
  useEffect(() => {
    if (contentRef.current) {
      setLineHeight(contentRef.current.clientHeight);
    }
  }, []);
  

  // Handle scroll event to highlight the vertical line dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (topRef.current && bottomRef.current) {
        const topRect = topRef.current.getBoundingClientRect();
        const bottomRect = bottomRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (topRect.top >= 0 && topRect.bottom <= windowHeight / 2) {
          setHighlight("top");
        } else if (bottomRect.top >= windowHeight / 2 && bottomRect.bottom <= windowHeight) {
          setHighlight("bottom");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
      {/* Main Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 ">
        {/* Left Section */}
        <div className="col-span-12 m-3 text-center md:col-span-12 text-center m-6">
          <h2 className="text-lg  mb-2 md:text-3xl mb-2">
            Evolving the drive with <span className="font-bold">360-degree</span>
          </h2>
          <h2 className="text-lg md:text-3xl">comprehensive solutions</h2>
        </div>
{/* hu */}
<div ref={contentRef} className="lg:hidden">
            {/* Top Content */}
            <button
              ref={topRef}
              onClick={()=>setHighlight("top")}
              className={highlight === "top" ? "text-white text-left" : "text-gray text-left"}
            >
              <div className={highlight === "top" ? "text-blue-500 text-center mx-auto" : "mx-auto text-gray text-center"} onClick={()=>{
 Setcat("passenger")
                disp(setcriteriaa("passenger"))
              }
                // disp(setcriteriaa("passenger"))
                }>
                <h2 className="text-xl text-center m-2 font-semibold">Passenger Vehicles</h2>
                <p className="text-sm m-2 font-base">Revving up innovation from </p>
                <p className="text-sm m-2 font-base"> interior to exterior.</p>
                <div id="indicators-carousel" className="block relative w-full md:hidden" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative w-full ">
      {/* Video Display */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        <video key={videos[activeIndex].src} width="400" autoPlay loop>
          <source src={videos[activeIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

  
    {/* <!-- Slider controls --> */}
  
   
</div>
              </div>
            </button>

            {/* Bottom Content */}
            <button ref={bottomRef}               
            onClick={()=>setHighlight("bottom")
              
            }
            className="text-left w-full transition">

<div className={highlight === "bottom" ? "text-white text-center" : "text-gray text-center"} onClick={()=>{
  Setcat("commercial")
  disp(setcriteriaa("commercial"))

}
  }>
                <h2 className="text-2xl m-2 font-semibold">Commercial Vehicles</h2>
                <p className="text-sm m-2 font-base">Advancing engineering </p>
                <p className="text-sm m-2 font-base">for heavy-duty vehicles.</p>
                <div id="indicators-carousel" className="block relative w-full md:hidden" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative w-full ">
      {/* Video Display */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        <video key={videos[activeIndex].src} width="400" autoPlay loop>
          <source src={videos[activeIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

  
    {/* <!-- Slider controls --> */}
  
   
</div>
              </div>

              {/* <h2 className="text-2xl m-2 font-semibold">Commercial Vehicles</h2>
              <p className="text-sm m-2 font-base">Advancing engineering </p>
              <p className="text-sm m-2 font-base">for heavy-duty vehicles.</p> */}
            </button>
          </div>
{/* hu */}

        {/* Vertical Line with Content */}
        <div className="hidden md:flex col-span-12">
        <div className="hidden md:flex items-center space-x-6 py-10 mx-20 col-span-6  ">
          {/* Vertical Line (Height Adjusts Dynamically) */}
          <div className="hidden md:block relative flex flex-col items-center">
            <div
              className={`w-1 transition-colors ${
                highlight === "top" ? "bg-white" : "bg-gray-800"
              }`}
              style={{ height: lineHeight / 2 }}
            ></div>
            <div
              className={`w-1 transition-colors ${
                highlight === "bottom" ? "bg-white" : "bg-gray-800"
              }`}
              style={{ height: lineHeight / 2 }}
            ></div>
          </div>

          <div ref={contentRef} className="sm:hidden md:flex flex-col justify-between space-y-10 col-span-10">
            {/* Top Content */}
            <button
              ref={topRef}
              onClick={()=>setHighlight("top")}
              className={highlight === "top" ? "text-white text-left" : "text-gray text-left"}
            >
              <div className={highlight === "top" ? "text-white text-left" : "text-gray text-left"} onClick={()=>{
 Setcat("passenger")
                disp(setcriteriaa("passenger"))
              }

                // disp(setcriteriaa("passenger"))
                }>
                <h2 className="text-2xl m-2 font-semibold">Passenger Vehicles</h2>
                <p className="text-sm m-2 font-base">Revving up innovation from </p>
                <p className="text-sm m-2 font-base"> interior to exterior.</p>
              </div>

            </button>

            {/* Bottom Content */}
            <button ref={bottomRef}               
            onClick={()=>setHighlight("bottom")
              
            }
            className="text-left w-full transition">

<div className={highlight === "bottom" ? "text-white text-left" : "text-gray text-left"} onClick={()=>{
  Setcat("commercial")
  disp(setcriteriaa("commercial"))

}
  }>
                <h2 className="text-2xl m-2 font-semibold">Commercial Vehicles</h2>
                <p className="text-sm m-2 font-base">Advancing engineering </p>
                <p className="text-sm m-2 font-base">for heavy-duty vehicles.</p>
              </div>

              {/* <h2 className="text-2xl m-2 font-semibold">Commercial Vehicles</h2>
              <p className="text-sm m-2 font-base">Advancing engineering </p>
              <p className="text-sm m-2 font-base">for heavy-duty vehicles.</p> */}
            </button>
          </div>
        </div>
        <div className="sm:hidden md:flex items-center space-x-6 py-10 mx-20 col-span-4">
          {/* <h1>hy</h1> */}
          <div>
            
          <Veoverview/>
          <div className="md:flex items-center space-x-5" style={cat!= "passenger" ?{visibility:"hidden"}:{}}>
          
          <div className="block"
        onClick={()=>disp(setcriteria("fullbody"))}

          >
                 <img
         
         src={completebody}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center font-base">Complete Body</p>
       </div>
<div className="block" onClick={()=>disp(setcriteria("front"))}>
                 <img
         
         src={front}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center">Front</p>
       </div>
                 <div className="block" onClick={()=>disp(setcriteria("cabin"))}>
                 <img
         
         src={cabin}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center">Cabin</p>
       </div>
       <div className="block" onClick={()=>disp(setcriteria("trunk"))}>
                 <img
         
         src={trnk}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center">Trunk</p>
       </div>
       <div className="block" onClick={()=>disp(setcriteria("Exterior"))}>
                 <img
         
         src={exterior}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center">Exterior</p>
       </div>
          </div>
          <div className="sm:hidden md:flex items-center space-x-5 text-center px-20 mx-auto" style={cat!= "commercial" ?{visibility:"hidden"}:{}}>
          
          <div className="block"
        onClick={()=>disp(setcriteria("fullbodycommerce"))}

          >
                 <img
         
         src={completebody}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center font-base">Complete Body</p>
       </div>
<div className="block" onClick={()=>disp(setcriteria("engine"))}>
                 <img
         
         src={front}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center">Engine</p>
       </div>
                 <div className="block" onClick={()=>disp(setcriteria("cabincommerce"))}>
                 <img
         
         src={cabin}
         width={60}
         height={10}
         className="focus:outline-white hover:outline"
         alt="Complete Body"
       />
       <p className="mx-auto text-center">Cabin</p>
       </div>
       
          </div>
          </div>

        
        </div>
        
        </div>

      </div>
    </div>
  );
}
