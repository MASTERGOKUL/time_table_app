import "./main.css";
export function SmallBox(props) {
  return (
    <div className="small-box" style={{ backgroundColor: props.color }}>
      <p>{props.text}</p>
    </div>
  );
}

export function Date() {
  return (
    <div style={{ display: "flex" }} className="date">
      <SmallBox color="#FFD6EF" text="Monday" />
      <SmallBox color="#FFD6EF" text="22/4/23" />
    </div>
  );
}
export function DailyLink() {
  return (
    <div style={{ display: "flex" }} className="date" id="dailyLink">
      <SmallBox color="#FFD6EF" text="About" />
      <SmallBox color="#FFD6EF" text="Week" />
    </div>
  );
}
