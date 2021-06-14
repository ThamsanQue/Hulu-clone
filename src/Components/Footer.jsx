import React from "react";
import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer__">
      <p>
        © {new Date().getFullYear()} Hulu Clone. No rights reserved - cloned by
        <a href="https://thamsanqaj-fea43.web.app/" target="_blank">
          {" "}
          Thamsanqa J
        </a>
      </p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </div>
  );
}

export default Footer;
