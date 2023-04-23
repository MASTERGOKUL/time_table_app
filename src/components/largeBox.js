import "./main.css"
export function LargeBox(props) {
  return (
    <div className="large-box" style={{backgroundColor:props.color}}>
        <p style={{maxWidth:"200px"}}>{props.course}</p>
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

export function OneDay(){
    return(
        <div className="day-schedule"> 
        <LargeBox color="#FFD6EF" code="21AM405" course="Introduction to AI"/>
        <LargeBox color="#FCECAA" code="21AM406" course="Applied machine learing"/>
        <LargeBox color="#BDEFF2" code="21AM403" course="Design and analysis of algorithm"/>
        <LargeBox color="#AAD6EF" code="21AM402" course="Internet and web programming"/>
        </div>
    );
}