import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <footer className="footer-main">
      <footer className="footer-main__header">
        <span className="footer-main__donate">
          <h4>Donate</h4>
          <i class="fas fa-donate"></i>
        </span>
        <div className="footer-main__icons-right">
          <h4>Chat</h4>
          <i class="fab fa-discord"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </footer>
      <footer className="footer-main__bottom">
        <span>
          Disclaimer: This site does not store any files on its server. All
          contents are provided by non-affiliated third parties.{" "}
        </span>
      </footer>
    </footer>
  );
}

export default Footer;
