/** It is the main compoment which is imported from calendly and it shows calendly popup widget */

import { PopupModal } from "react-calendly";
import { useState } from "react";

const Calendly = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="btn signuBtn p-4" onClick={() => setIsOpen(true)}>
        Book another Meeting
      </button>
      <PopupModal
        url="https://calendly.com/fiberdemo"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Calendly;
