import Button from "../UI/Button"
import img1 from "../assests/nat-1-large.jpg"
import img2 from "../assests/nat-2-large.jpg"
import img3 from "../assests/nat-3-large.jpg"

const AboutUs = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-2">
          <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with Nature</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Live Advanture that never happens before</h3>
          <p className="paragraph">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button cssClass="btn-text">Learn more &rarr;</Button>
        </div>
        <div className="col-1-2">
            <div className="composition">
                <img src={img1} alt="photo1" className="composition__photo composition__photo--p1" />
                <img src={img2} alt="photo2" className="composition__photo composition__photo--p2" />
                <img src={img3} alt="photo3" className="composition__photo composition__photo--p3" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
