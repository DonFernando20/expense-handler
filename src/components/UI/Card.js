import "./Card.css";

const Card = (props) => {
  // const classes = "card " + props.className;
  // return <div className={classes}>{props.children}</div>;
  return <div className={`card ${props.className}`}>{props.children}</div>;
  //the value of children.prop is the content btw opening and closing tags of custom component.
};

export default Card;
