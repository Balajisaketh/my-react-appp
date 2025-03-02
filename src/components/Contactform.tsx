import { useState } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>, setError: React.Dispatch<React.SetStateAction<string>>) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
      setError(""); // Clear error when user types
    };

  const validateForm = () => {
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError("Full Name is required");
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }
    if (!company.trim()) {
      setCompanyError("Company name is required");
      isValid = false;
    }
    if (!message.trim()) {
      setMessageError("Message cannot be empty");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3s

      // Clear form
      setFullName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }
  }

  return (
    <section className="bg-[#006abc] text-white py-25 px-6 col-span-12">
      <div className="mx-auto md:grid grid-cols-12 col-span-12">
        {/* Contact Information */}
        <div className="col-span-6 mx-auto flex flex-col order-last md:order-none">
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <div className="w-16 border-b-2 border-white mb-4"></div>
          <p className="mb-6 text-[18px] font-semibold">For general enquiries</p>

          <div className="space-y-4 mb-10">
            <div>
              <h3 className="font-semibold text-xl">Address :</h3>
              <p className="text-base font-normal">
                110, 16th Road, Chembur, Mumbai - 400071
              </p>
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
        <div className="col-span-6 order-1 flex flex-col md:flex-col">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={fullName}
                onChange={handleChange(setFullName, setFullNameError)}
                className="w-full md:w-3/4 p-4 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-1 text-lg"
              />
              {/* {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
               */}
                {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange(setEmail, setEmailError)}
                className="w-full md:w-3/4 p-4 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-1 text-lg"
              />
              {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
               */}
               {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={company}
                onChange={handleChange(setCompany, setCompanyError)}
                className="w-full md:w-3/4 p-4 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none mb-1 text-lg"
              />
               {companyError && <p className="text-red-500 text-sm">{companyError}</p>}
              {/* {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>} */}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={handleChange(setMessage, setMessageError)}
                className="w-full md:w-3/4 p-2 border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-white hover:border-white transition outline-none resize-none h-24 mb-1 text-lg"
              ></textarea>
              {/* {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
               {messageError && <p className="text-red-500 text-sm">{messageError}</p>} */}
                {messageError && <p className="text-red-500 text-sm">{messageError}</p>}
            </div>

            <button
              type="submit"
              className="border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Send
            </button>
          </form>
          <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-t-lg transition-transform ${
          showPopup ? "translate-y-0" : "translate-y-full"
        }`}
      >
      Form submitted successfully!
      </div>
    </div>
        </div>
      
    </section>
  );
};

export default ContactForm;
