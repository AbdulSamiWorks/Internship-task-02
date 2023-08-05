import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white border-t-2 mx-10 mb-36 border-gray-500">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Don't Google <br /> Design Questions
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Your email address will not be published. Required fields are
                marked*
              </p>
              <input
            type="text"
            placeholder="Enter Your Name"
            className="mt-10  h-16  text-black bg-gray-100 w-1/2 rounded-3xl px-10 bg-transparent border-whitw border-2"
          />
            <input
            type="text"
            placeholder="Enter Your E-mail"
            className="mt-10 h-16 text-black bg-gray-100 w-1/2 rounded-3xl px-10 bg-transparent border-whitw border-2"
          />
            <input
            type="text"
            placeholder="Enter Your Question"
            className="mt-10 h-40 text-black bg-gray-100 w-full w-1/2 rounded-3xl px-5 bg-transparent border-whitw border-2"
          />
            </div>
            <div>
              <div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08473470898434!3d33.616116250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1690974465123!5m2!1sen!2s"
                      width="600"
                      height="450"
                      className="rounded-3xl"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <Link
                  to="/"
                  className="inline-block mt-10 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
