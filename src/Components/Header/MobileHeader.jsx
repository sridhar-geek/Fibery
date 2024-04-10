/** Header Component for Mobile Desktop  */

import { useState } from "react";
// Imports from another files
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assests/FiberyLogo.png";

// sidebar component
const SideBar = ({ setSideBar, sideBar }) => {
  const names = ["Solution", "Product", "Resources", "Pricing"];
  return (
    <div
      className={`fixed left-0 top-0 h-screen w-1/4 bg-white shadow-sm shadow-gray-600/30  overflow-auto transition duration-1000 ease-in-out z-10 ${
        sideBar ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col p-4">
        <button onClick={() => setSideBar(!sideBar)}>
          <RxCross2 className="text-2xl ml-auto mb-10" />{" "}
        </button>
        {names.map((name) => (
          <div className="p-2 m-1 border-spacing-1 hover:scale-125 duration-900 hover:bg-slate-100">
            <button className="flex justify-center items-center gap-2">
              {name}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileHeader = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="justify-between flex items-center  md:hidden">
      {sideBar ? (
        <SideBar setSideBar={setSideBar} sideBar={sideBar} />
      ) : (
        <button onClick={() => setSideBar(!sideBar)}>
          <IoMenu fontSize="2rem" />
        </button>
      )}
      <div className="flex align-top justify-start">
        <h6 className="logo">Fibery </h6>
        <img src={Logo} alt="logo" className="h-8" />
      </div>
      <button className="btn signuBtn">Signup</button>
    </div>
  );
};

export default MobileHeader;
