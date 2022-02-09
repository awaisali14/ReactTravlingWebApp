import footerLogo from "../assests/logo-green-1x.png";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="footer-img">
        <img src={footerLogo} alt="footerlogo" />
      </div>
      <div className="row">
        <div className="col-1-2">
          <div className="f_navigation">
            <ul className="f_list">
              <li className="f_item"> About Us </li>
              <li className="f_item"> Carrers </li>
              <li className="f_item"> Contact Us </li>
              <li className="f_item"> Products </li>
              <li className="f_item"> Register </li>
            </ul>
          </div>
        </div>
        <div className="col-1-2">
          <p className="f_para">
            This template is created by Awais Ali. I hope you liked it. For
            more, visit my offical page. You will find more beautiful templates
            there. This template is protected by copyrights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
