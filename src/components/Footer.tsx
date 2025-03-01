import supreme  from  "../assets/Supreme_logos (3).png"
const Footer = () => {

    return (
      <footer className="bg-gradient-to-b from-white to-blue-100 text-black py-10 border-t border-gray-300">
        <div className="mx-auto px-6 lg:px-10 ">
            <div className="gid grid-cols-12 w-[32vh]">
                <img src={supreme} />

              

            {/* <h2 className="text-2xl font-bold text-blue-600"><span className="text-black">SUPREME</span></h2> */}
            </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm mt-10 mx-3">
            {/* Logo Section */}
            {/* <div>
              <h2 className="text-2xl font-bold text-blue-600">SUPREME <span className="text-black">GROUP</span></h2>
            </div> */}
            
            {/* Applications */}
            <div>
              <h3 className="font-semibold mb-4 text-base">APPLICATIONS</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="leading-loose text-base">Apparel</li>
                <li className="leading-loose text-base">Automotive</li>
                <li className="leading-loose text-base">Filtration</li>
                <li className="leading-loose text-base">Customized Nonwoven</li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="leading-loose text-base">Who We Are</li>
                <li className="leading-loose text-base">Global Competency</li>
                <li className="leading-loose text-base">Innovation</li>
                <li className="leading-loose text-base">ESG Impact</li>
              </ul>
            </div>
            
            {/* More */}
            <div>
              <h3 className="font-semibold mb-4">MORE</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="leading-loose text-base">Contact Us</li>
                <li className="leading-loose text-base">Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-base">Follow us</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="leading-loose text-base">Linked in</li>
                
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-lg text-black ">
            <p>&copy;2024. All Rights Reserved.</p>
            <p className="hidden md:block">Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</p>
           
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;