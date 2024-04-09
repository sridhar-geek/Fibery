/** It is hero component shows welcome text, descrption and buttons to schedule meeting */

//Imports from another components
import UnicornImage from "../assests/UnicornImage.png";


const Main = () => {

  return (
    <div>
      <main>
        {/* Welcome Text */}
        <h1 className="text-center font-bold font-sans text-2xl mt-10 md:text-4xl">
          Turn Your Startup Idea into a Unicorn{" "}
        </h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-5/6 mx-auto">
          <img
            src={UnicornImage}
            alt="banner"
            className="h-56 mx-auto md:hidden"
          />
          {/* Description */}
          <h4 className="font-bold text-slate-500 md:mt-24">
            Dreaming of building the next big thing? Our team of experienced
            advisors can help you transform your startup idea into a thriving
            business.
          </h4>
          <img
            src={UnicornImage}
            alt="banner"
            className="h-64 hidden md:block"
          />
        </div>
        <ul className="list-disc">
          <li>
            <p className="para">
              We offer free counseling sessions to guide you through the crucial
              steps of building a successful startup.
            </p>
          </li>
          <li>
            <p className="para">
              Don't wait! Schedule a free counseling session today and take your
              startup journey to the next level.
            </p>
          </li>
        </ul>
        {/* Buttons to schedule meeting */}
        <div className="flex justify-center gap-5 mt-10">
          {/* <Calendly /> */}
          <button className="btn signuBtn p-4">
            Book a Meeting
          </button>
          <button className="btn outlineBtn">Contact Us</button>
        </div>
      </main>
    </div>
  );
};

export default Main;
