import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <BsTwitterX size={35} />
          <FaInstagram size={35} />
          <FaFacebookSquare size={35} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div>
        <p
          style={{
            backgroundColor: "gray",
            color: "black",
            padding: "10px",
            textAlign: "center",
            marginTop: "0",
          }}
        >
          © 2024 studentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
