import { useTheme } from "next-themes";
import React from "react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
const ToggleBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
    {theme === 'dark' ? <div className="md:w-5/6 top-5  text-right md:px-5 px-10 pt-5 absolute">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-3 rounded-full bg-gray-500">
        <BsSunFill className="text-2xl "/>
      </button>
    </div> : <div className="md:w-5/6 top-5  text-right md:px-5 px-10 pt-5 absolute">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-3 rounded-full bg-blue-400">
        <BsMoonFill className="text-2xl "/>
      </button>
    </div>}
    </>
  );
};

export default ToggleBtn;
