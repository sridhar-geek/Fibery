/** It is the main compoment which is imported from calendly and it shows calendly popup widget */

import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div>
      <PopupWidget
        url="https://calendly.com/fiberdemo"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#334155"
      />
    </div>
  );
};

export default Calendly;
