
// Imports from anthor files
import MobileHeader from "./MobileHeader";
import Logo from '../../assests/FiberyLogo.png'

import { MdKeyboardArrowRight } from "react-icons/md";

const DesktopHeader = () => {
  return (
    <div className="shadow-gray-600/30 shadow-sm p-4">
      <div className=" justify-between hidden md:flex ">
        <div className="flex gap-10">
          <div className="flex align-top justify-start">
            <h6 className="logo">Fibery </h6>
            <img src={Logo} alt="logo" className="h-8" />
          </div>
          <div className="flex gap-5">
            <div className="navElements">
              Solution
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
            <div className="navElements">
              Product{" "}
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
            <div className="navElements">Resources</div>
            <div className="navElements">Pricing</div>
          </div>
        </div>
        <div>
          <button className="btn hover:bg-slate-700 hover:text-white transition hover:duration-700 ">
            Login
          </button>
          <button className="btn outlineBtn">Get a Demo</button>
          <button className="btn signuBtn">Signup</button>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default DesktopHeader;
