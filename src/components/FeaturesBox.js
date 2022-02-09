const FeaturesBox = (props) => {
    return (
        <div className="feature-box">
            <i className={`feature-box__icon ${props.cssClass}`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
    );
}
 
export default FeaturesBox;