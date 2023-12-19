import { Link } from "react-router-dom";
import "../main.css";
export function SmallBox(props) {
  let element = "";
  if(props.flag==="true"){
    element=<Link to={props.route} style={{textDecoration:"none"}}><p>{props.text}</p></Link>
}else{
  element = <p>{props.text}</p>
  }
  return (
    <div className="small-box" style={{ backgroundColor: props.color }}>
      {element}
    </div>
  );
}

export function Date(props) {
  return (
    <div style={{ display: "flex" }} className="date">
      <SmallBox color="#FFD6EF" text={props.day}/>
      <SmallBox color="#FFD6EF" text={props.date} />
    </div>
  );
}
