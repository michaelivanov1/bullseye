import React from "react";
import logo from "../images/logo.png";

const HomePage = () => {
  return (
    <div>
      <div
        className="relative bg-hero-image bg-cover w-full flex"
        style={{ height: "100vh" }}
      >
        <div className="w-full">
          <div className="mx-auto">
            <div className="p-10 bg-black bg-opacity-30">
              <div className="text-white font-bold text-lg size-20">
                <img src={logo} alt="Bulleye's Logo" />
              </div>
              <ul className="flex space-x-16 justify-center">
                <li>
                  <a href="#" className="text-primary text-2xl">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-2xl">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-2xl">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-2xl">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute text-primary text-left top-72 w-1/2 border px-40">
        <h1
          className="text-5xl uppercase"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            lineHeight: "1.2",
          }}
        >
          patience is the <br />
          currency of success
        </h1>
        <h1 className="my-10 text-header">
          Some dummy text here Some dummy text here Some dummy text here Some
          dummy text here Some dummy text here{" "}
        </h1>
        <button className="text-2xl">Learn More</button>
      </div>
    </div>
  );
};

export default HomePage;
