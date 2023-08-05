import React from "react";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 border-t-2 mx-10 border-gray-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-7 text-indigo-600">
                Welcome To Phlox
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Who We Are ?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                gleams steal into the inner sanctuary, I throw myself down among
                the tall grass by the trickling stream; and, as I lie close to
                the earth, a thousand unknown plants are noticed by me .
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                when I hear the buzz of the little world among the stalks, and
                grow familiar with the countless indescribable forms of the
                insects and flies, then I feel the presence .
              </p>
            </div>
            <Button title={"Contact Us"} color="blue" />
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="h-screen overflow-hidden w-full flex justify-center mt-10">
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
          <Button title={"Get Started"} color={"blue"} />
        </div>
      </div>
    </div>
  );
};

export default About;
