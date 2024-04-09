import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div>
      <PopupWidget
        url="https://calendly.com/fiberdemo"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

export default Calendly;
