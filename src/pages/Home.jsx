import React from "react";
import LayoutHome from "../components/LayoutHome";
import ProductCardLayout from "../components/ProductCardLayout";
import NewArrivalCardLayout from "../components/NewArrivalCardLayout";
import PostCardLayout from "../components/PostCardLayout";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const callouts = [
  {
    name: "IPhone 12 Pro It’s A Leap Year.",
    description: "Work from home accessories",
    imageSrc:
      "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/iPhone-15-Featured.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Beats Solo Wireless-Pro.",
    description: "Work from home accessories",
    imageSrc:
      "https://w.forfun.com/fetch/02/02e28dc65916dffd91d32b408f1d2f1d.jpeg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "More Power. Wakes Instantly..",
    description: "Work from home accessories",
    imageSrc:
      "https://w0.peakpx.com/wallpaper/601/760/HD-wallpaper-apple-macbook-laptop-on-black-background-modern-technology-laptop-apple.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const Home = () => {
  return (
    <>
    <div className="overflow-hidden bg-white">
      <div className="bg-[#ffffff] min-h-screen mt-5 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:max-w-none">
           <Link to={'products'}>
           <div className=" space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout, index) => (
                <div key={index} className="group relative">
                  <div className="h-2 relative min-h-screen w-full overflow-hidden rounded-3xl bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                     <h1 className="text-xl font-semibold text-black">
                     {callout.name}
                     </h1>
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
           </Link>
          </div>
        </div>
      </div>
   <Link to={'/products'}>
   <LayoutHome />
   </Link>
      <Link to={'/products'}><ProductCardLayout /></Link>
     <div className="h-96 bg-white ">
     <div className="h-96 flex-wrap flex items-center justify-around  mx-10 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 md:flex-nowrap md:pl-5">
        <div>
          <p className="text-white">Asus Zenbook Duo</p>
          <h2 className="text-5xl font-bold text-white">
            The Laptop <br /> Of Tomorrow
          </h2>
        </div>
        <div>
          <img
            src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Free-Mockup-Scene.png"
            alt=""
            className="ml-auto -mr-16"
          />
        </div>
      </div>
     </div>
      <NewArrivalCardLayout />

    <Link to={'products'}>
    <div className=" overflow-hidden flex flex-wrap  w-auto md:flex-nowrap">
        <div className="bg-black rounded-3xl mx-0 w-full mb-10 md:mb-0 lg:mx-10">
          <p className="text-white mt-32 ml-10">camera Accessories</p>
          <h3 className="text-white font-bold text-4xl  ml-10">
            Launch Party <br /> Nice Photos
          </h3>
          <img
            src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-15.png"
            alt=""
            className="ml-64 -mt-72"
          />
        </div>
        <div className="bg-blue-700 rounded-3xl  w-full overflow-hidden">
          <p className="text-white mt-32 ml-10">game Accessories</p>
          <h3 className="text-white font-bold text-4xl  ml-10">
            Enjoy Game
            <br />
            High Tech
          </h3>
          <img
            src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-16.png"
            alt=""
            className="ml-56 -mt-52"
          />
        </div>
      </div>
    </Link>
    <Link to={'/blog'}>  <PostCardLayout /></Link>
      <div className="h-screen  overflow-hidden w-full flex justify-center">
        <div
          className=" h-3/4 w-11/12 rounded-3xl w-full flex flex-col items-center justify-center text-white bg-no-repeat"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/003/559/330/original/abstract-background-with-gradient-blue-bubble-free-vector.jpg')`,
          }}
        >
          <p className="text-xl font-normal mt-2 sm:flex-wrap">
            Sign Up Newsletter & Promotions!
          </p>
          <h3 className="text-7xl mt-20">
            <center>
              <strong>Get 25% Discount</strong>
              <br />
              On Your Next Purchase
            </center>
          </h3>
          <input
            type="text"
            placeholder="Enter Your E-mail"
            className="mt-10 h-16 w-1/2 rounded-3xl px-10 bg-transparent border-whitw border-2"
            
          />
          <Button title={'Get Started'} color={'blue'}/>
        </div>
      </div>
     
      </div>
    </>
  );
};

export default Home;
