import FeaturesBox from "./FeaturesBox"

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-4">
        <FeaturesBox cssClass="icon-basic-world" title="Explore the world" />
        </div>
        <div className="col-1-4">
        <FeaturesBox cssClass="icon-basic-compass" title="Meet Nature" />
        </div>
        <div className="col-1-4">
        <FeaturesBox cssClass="icon-basic-map" title="Find your way" />
        </div>
        <div className="col-1-4">
        <FeaturesBox cssClass="icon-basic-heart" title="Live a healthier life" />
        </div>
      </div>
    </section>
  );
};

export default Features;
