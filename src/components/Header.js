
import logoimg from "../assests/logo-white.png";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoimg} alt="logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">
            is where life happens
          </span>
        </h1>
        <Button cssClass="btn btn--white btn--animated"><b>Discover our Tours</b></Button>
      </div>
    </header>
  );
};

export default Header;
