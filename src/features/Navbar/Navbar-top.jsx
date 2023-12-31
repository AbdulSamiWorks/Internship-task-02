import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiLogoRedbubble } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import {HiOutlineMail} from 'react-icons/hi'
const navigation = [
  {
    name: "Worlds Fastest Online Shopping Destination",
    href: "#",
    current: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-[#000000]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="invisible flex flex-shrink-0 items-center lg:visible">
                    <BiLogoRedbubble className=" bg-white" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <FiPhoneCall className="text-white" />
                  </button>
                  <span className="text-white pl-3 pr-5"> 088-888-8888</span>
                  <p className="text-gray-600 pr-3">|</p>
                  <HiOutlineMail className="text-white"/>
                  <span className="text-white pl-3 pr-5 ">Info@phlox.pro</span>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
