import React from "react";

const Button = ({ title, border = "white", color = "blue" }) => {
  return (
    <>
      <button
        className={`mt-5 py-3 px-5 border-2  border-${border}-500 bg-blue-700 text-white rounded-3xl w-36 flex items-center justify-center hover:bg-white hover:text-black hover:border-2 hover:border-green-500`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
