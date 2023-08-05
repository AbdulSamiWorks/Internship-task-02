import React from "react";
import {BiLogoFacebook,BiLogoInstagram,BiLogoLinkedin,BiLogoTwitter} from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <footer className="-mt-36 bg-white">
        <div className="flex items-center flex-col justify-evenly  lg:flex-row border-b-2 border-gray-400 mx-10 mb-10">
          <img
            className="h-12 w-auto"
            src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png"
            alt="Your Company"
          />
          <div className="flex flex-wrap mx-3 mt-7 lg:flex-none lg:gap-32 mb-10 ">
            <div>
              <h3 className="text-xl font-bold mb-3">Visit Link</h3>
              <p className="text-gray-500 text-lg font-normal">Shop</p>
              <p className="text-gray-500 text-lg font-normal">Privacy</p>
              <p className="text-gray-500 text-lg font-normal">
                Terms & Condition
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold ml-5 lg-ml-0 mb-3 ">Company</h3>
              <p className="text-gray-500 ml-5 text-lg font-normal lg-ml-0">
                Home
              </p>
              <p className="text-gray-500 ml-5 text-lg font-normal lg-ml-0">
                About Us
              </p>
              <p className="text-gray-500 ml-5 text-lg font-normal lg-ml-0">
                Contact US
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold ml-5 lg-ml-0 mb-3">Contact</h3>
              <p className="text-gray-500 ml-5 lg-ml-0 text-lg font-normal">
                +99 (0) 101 0000 888
              </p>
              <p className="text-gray-500 ml-5 lg-ml-0 text-lg font-normal">
                Info@yourdomain.com
              </p>
              <p className="text-gray-500 ml-5 lg-ml-0 text-lg font-normal">
                +92 345-67894301
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold ml-5 lg-ml-0 mb-3">Address</h3>
              <p className="text-gray-500 text-lg ml-5 lg-ml-0 font-normal">
                Patricia Amedee 4401 <br /> Waldeck Street Grapevine <br />{" "}
                Nashville, Tx 76051
              </p>
            </div>
          </div>
        </div>
        <div className="text-xl font-normal flex flex-col lg:flex-row  items-center justify-between mb-10 mx-10 text-gray-500">
        <p>© 2023 By Averta. All rights reserved.</p>
        <div className="flex mx-10 mt-2">
        <BiLogoFacebook className="mx-2"/>
        <BiLogoInstagram className="mx-2"/>
        <BiLogoLinkedin className="mx-2"/>
        <BiLogoTwitter className="mx-2"/>
        </div>
        </div>
       
      </footer>
    </>
  );
};

export default Footer;
