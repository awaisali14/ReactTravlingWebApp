const Button = (props) => {
  return <button className={props.cssClass} {...props.data}>{props.children}</button>;
};

export default Button;
