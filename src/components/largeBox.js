import "./main.css";
// import { useRef } from "react";
import React from "react";
export function LargeBox(props) {
  return (
    <div className="large-box" style={{ backgroundColor: props.color }}>
      <p style={{ minWidth: "200px", maxWidth: "200px" }}>{props.course}</p>
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
  var colors = [
    "#BDEFF2",
    "#FFD6EF",
    "#FCECAA",
    "#BDEFF2",
    "#AAD6EF",
    "#BDEFA2",
  ];
  let reference ;
  for(let i=0;i<5;i++){
    let tempCurrent = props.period[i]; // ""09.45""
    let currentTime = props.currentTime;
    let start = tempCurrent[0].replace('"','').slice(0,-1);  //""09.45"" => 09.45" => 09.45
    let end = tempCurrent[1].replace('"','').slice(0,-1);
    if(start <= currentTime && end>= currentTime){
      reference = i;
    }
  }
  // console.log(reference);
  
  return (
    <div className="day-schedule">
      {props.day_peroids.map((period, index) => (
        <>
          {props.code.map((code) => {
            const courseName = Object.keys(code)[0];
            if (courseName === period) {
              let color_code;
              if(index === reference){
                 color_code = "#BDEFA2";
              }
              else{
                 color_code=colors[index];
              }
              return (
                <LargeBox
                  color={color_code}
                  code={code[period]}
                  course={period}
                />
              );
            }
            return null;
          })}
        </>
      ))}
    </div>
  );
}
