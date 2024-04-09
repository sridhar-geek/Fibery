import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-300">
      <div className="container flex gap-4 text-xl justify-center w-full mb-10 mt-12 p-4">
        <FaFacebook className="social" />
        <FaInstagramSquare className="social" />
        <FaTwitter className="social" />
        <FaYoutube className="social" />
        <FaDiscord className="social" />
      </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 items-center w-full ">
        <div className="footer">
          <h4 className="headings">Important Links</h4>
          <div className="links">Terms and Conditions</div>
          <div className="links">Refund Policy</div>
          <div className="links">Privacy Policy</div>
          <div className="links">Shipping and Delivery</div>
        </div>
        <div className="footer">
          <h4 className="headings">Products</h4>
          <div className="links">Hostel Haat</div>
          <div className="links">Bunny's WP</div>
          <div className="links">Meal on Click</div>
          {/* <div className="links">Shipping and Delivery</div> */}
        </div>
        <div className="footer">
          <h4 className="headings">Quick Links</h4>
          <div className="links">About us</div>
          <div className="links">Contact us</div>
          <div className="links">Carrers</div>
          {/* <div className="links">Shipping and Delivery</div> */}
        </div>
      </div>
      <div className="border-t-2 border-slate-300 mt-10 flex justify-between mb-6 ">
        <h5 className="ml-10 mt-5">Copyright @2024</h5>
        <h5 className="mr-10 mt-5">Powered by Fibery Private Limited</h5>
      </div>
    </div>
  );
};

export default Footer;
