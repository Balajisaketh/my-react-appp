// import React from "react";
// const ContactForm = () => {
//     return (
//       <section className="bg-[#006abc] text-white py-25 px-6 col-span-12">
//         <div className="mx-auto md:grid  grid-cols-12 col-span-12 ">
//           {/* Contact Information */}
//           <div className="col-span-6 mx-auto order-2 md:order-none">
//             <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
//             <div className="w-16 border-b-2 border-white mb-4"></div>
//             <p className="mb-6 text-[18px]
//  font-semibold">For general enquiries</p>
            
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold text-xl">Address :</h3>
//                 <p className="text-base font-normal">110, 16th Road, Chembur, Mumbai - 400071</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-xl">Phone :</h3>
//                 <p className="text-base font-normal">+91 22 25208822</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-xl">Email :</h3>
//                 <p className="text-base font-normal">info@supremegroup.co.in</p>
//               </div>
//             </div>
//           </div>
  
//           {/* Contact Form */}
//           <div className="col-span-6 order-1 md:order-none">
//             <form >
//               <div>
//                 {/* <label className="block mb-1">Full name</label> */}
//                 <input type="text" placeholder="Full name" className="w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-5 text-lg" />
//               </div>
//               <div>

//                 {/* <label className="block mb-1">Email</label> */}
//                 <input type="email" placeholder="Email" className="w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-5  text-lg" />
//               </div>
//               <div>
//                 {/* <label className="block mb-1">Company</label> */}
//                 <input type="text" placeholder="Company" className="w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-5  text-lg" />
//               </div>
//               <div>
//                 {/* <label className="block mb-1">Message</label> */}
//                 <textarea  placeholder="Message" className="w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none resize-none h-24 mb-3  text-lg"></textarea>
//               </div>
//               <button type="submit" className="border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default ContactForm;
import React from "react";
const ContactForm = () => {
    return (
      <section className="bg-[#006abc] text-white py-25 px-6 col-span-12">
        <div className="mx-auto md:grid  grid-cols-12 col-span-12 ">
          {/* Contact Information */}
          <div className="col-span-6 mx-auto  flex flex-col order-last md:order-none">
            <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
            <div className="w-16 border-b-2 border-white mb-4"></div>
            <p className="mb-6 text-[18px]
 font-semibold">For general enquiries</p>
            
            <div className="space-y-4 mb-10">
              <div>
                <h3 className="font-semibold text-xl">Address :</h3>
                <p className="text-base font-normal">110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Phone :</h3>
                <p className="text-base font-normal">+91 22 25208822</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Email :</h3>
                <p className="text-base font-normal">info@supremegroup.co.in</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="col-span-6 order-1 flex flex-col  md:flex flex-col order-2">
            <form >
              <div>
                {/* <label className="block mb-1">Full name</label> */}
                <input type="text" placeholder="Full name" className="w-full md:w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-5 text-lg" />
              </div>
              <div>

                {/* <label className="block mb-1">Email</label> */}
                <input type="email" placeholder="Email" className="w-full md:w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-5  text-lg" />
              </div>
              <div>
                {/* <label className="block mb-1">Company</label> */}
                <input type="text" placeholder="Company" className="w-full md:w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-5  text-lg" />
              </div>
              <div>
                {/* <label className="block mb-1">Message</label> */}
                <textarea  placeholder="Message" className="w-full md:w-3/4 p-2 border-b-2  border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none resize-none h-24 mb-3  text-lg"></textarea>
              </div>
              <button type="submit" className="border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  