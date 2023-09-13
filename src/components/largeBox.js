import "./main.css";
export function LargeBox(props) {
  return (
    <div className="large-box" style={{ backgroundColor: props.color }}>
      <p style={{ minWidth: "200px" ,maxWidth:"200px"}}>{props.course}</p>
      <span id="vl"></span>
      <p>{props.code}</p>
    </div>
  );
}
/* colors
#BDEFF2 - light blue
#FCECAA - light yellow
#FFD6EF - light pink
#0E273D - dark blue
#F2F2F2 - light grey\
#AAD6EF - light violet
light green - #BDEFA2
*/

export function OneDay(props) {
  var colors=["#BDEFF2","#FFD6EF","#FCECAA","#BDEFF2","#AAD6EF","#BDEFA2"]
  return (
    <div className="day-schedule">
      {props.day_peroids.map((period, index) => (
        <LargeBox color={colors[index]} code="21AM000" course={period} />
        
      ))} 

    </div>
  );
}
