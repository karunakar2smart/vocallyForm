import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const SocialIcons = () => {
 return (
  <>
   <div className="container-fluid mt-5 ">
    <ul className="d-flex justify-content-center list-unstyled me-5 ">
     <li className="me-3 list-style-none">
      <FaFacebook size={22} />
     </li>
     <li className="me-3 list-style-none">
      <FaInstagram size={22} />
     </li>
     <li className="me-3 list-style-none">
      <AiFillYoutube size={22} />
     </li>
    </ul>
   </div>
  </>
 );
};

export default SocialIcons;
