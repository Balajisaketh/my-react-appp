// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     company: "",
//     message: "",
//   });
//   const [showPopup, setShowPopup] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear error when user starts typing
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     let newErrors: any = {};

//     if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.company.trim()) newErrors.company = "Company name is required";
//     if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // console.log("Form Submitted Successfully:", formData);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 3000); 
//       // alert("Form submitted successfully!");
      
//       // Clear form after submission
//       setFormData({ fullName: "", email: "", company: "", message: "" });
//     }
//   };

//   return (
//     <section className="bg-[#006abc] text-white py-25 px-6 col-span-12">
//       <div className="mx-auto md:grid grid-cols-12 col-span-12">
//         {/* Contact Information */}
//         <div className="col-span-6 mx-auto flex flex-col order-last md:order-none">
//           <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
//           <div className="w-16 border-b-2 border-white mb-4"></div>
//           <p className="mb-6 text-[18px] font-semibold">For general enquiries</p>

//           <div className="space-y-4 mb-10">
//             <div>
//               <h3 className="font-semibold text-xl">Address :</h3>
//               <p className="text-base font-normal">
//                 110, 16th Road, Chembur, Mumbai - 400071
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl">Phone :</h3>
//               <p className="text-base font-normal">+91 22 25208822</p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl">Email :</h3>
//               <p className="text-base font-normal">info@supremegroup.co.in</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="col-span-6 order-1 flex flex-col md:flex-col">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full md:w-3/4 p-4 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-1 text-lg"
//               />
//               {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
//             </div>

//             <div>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full md:w-3/4 p-4 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-1 text-lg"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>

//             <div>
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full md:w-3/4 p-4 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-1 text-lg"
//               />
//               {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
//             </div>

//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full md:w-3/4 p-2 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none resize-none h-24 mb-1 text-lg"
//               ></textarea>
//               {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//             </div>

//             <button
//               type="submit"
//               className="border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition"
//             >
//               Send
//             </button>
//           </form>
//           <div
//         className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-t-lg transition-transform ${
//           showPopup ? "translate-y-0" : "translate-y-full"
//         }`}
//       >
//       Form submitted successfully!
//       </div>
//     </div>
//         </div>
      
//     </section>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FormWithPopup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 sec
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {/* Pop-up Notification */}
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-t-lg transition-transform ${
          showPopup ? "translate-y-0" : "translate-y-full"
        }`}
      >
        🎉 Form submitted successfully!
      </div>
    </div>
  );
};

export default FormWithPopup;
