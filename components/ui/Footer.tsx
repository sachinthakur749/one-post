import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 mt-[100px]   py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <a className="font-bold text-[30px]" href="/">
              one<span className="text-primary font-extrabold">Post</span>
            </a>{" "}
            <div className="">
              <h1 className="text-[35px] font-semibold ">
                <span className="text-gray-500">Endless Insights</span>{" "}
              </h1>{" "}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-[100px] text-center lg:text-left">
            <div>
              <h4 className="font-semibold text-lg mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-500  text-[13px]  ">
                <li>
                  <a href="#mission" className="hover:underline">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:underline">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#newsletter" className="hover:underline">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-500  text-[13px]  ">
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#refund" className="hover:underline">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black text-lg mb-4">
                Stay Connected
              </h4>
              <ul className="space-y-2 text-gray-500 text-[13px] ">
                <li>
                  <a href="#instagram" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#linkedin" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#youtube" className="hover:underline">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10  pt-4 flex  justify-between  items-center">
          <p className="text-[13px] text-gray-500 ">
            &copy; {new Date().getFullYear()} onePost
          </p>
          <a
            href="#terms"
            className="text-[13px]  text-gray-500 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#top"
            className="text-[13px]  text-gray-500 hover:underline flex items-center"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
