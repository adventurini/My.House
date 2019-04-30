import React from 'react';
import { scrollToTop } from '../../helper-functions/display-functions';

function Footer() {
  return (
    <footer className="landing_footer">
      <div className="footer_top">
        <div>
          <h3 onClick={scrollToTop} title="Back to top">
            MyHouse
          </h3>
          <span>Team</span>
          <span>
            <a href="https://github.com/labs12-real-estate">Repository</a>
          </span>
        </div>
        <div>
          <span>Connect</span>
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <a href="https://github.com/labs12-real-estate">
            <i className="fab fa-github" />
          </a>
          <i className="fab fa-facebook" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
      <div className="footer_bottom">
        <span>2019 MyHouse</span>
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
    </footer>
  );
}

export default Footer;
