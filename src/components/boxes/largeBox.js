import "../main.css";
import moment from "moment";
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
  /* var colors = [
    "#BDEFF2",
    "#FFD6EF",
    "#FCECAA",
    "#BDEFF2",
    "#AAD6EF",
    "#BDEFA2",
  ];*/
  let reference;
  for (let i = 0; i < 5; i++) {
    let tempCurrent = props.period[i]; // ""09.45""
    let currentTime = moment(props.currentTime, "hh.mm a");
    let start = tempCurrent[0].replace('"', "").slice(0, -1); //""09.45"" => 09.45" => 09.45
    let end = tempCurrent[1].replace('"', "").slice(0, -1);
    const startTime = moment(start, "hh.mm a");
    const endTime = moment(end, "hh.mm a");
    if (currentTime.isBetween(startTime, endTime)) {
      reference = i;
    }
  }
  // console.log(props.code);

  return (
    <div className="day-schedule">
      {props.day_peroids.map((period, index) => ( //['BIG DATA TECHNOLOGIES', 'DEEP LEARNING', 'INTELLIGENT MULTI AGENT AND EXPERT SYSTEMS', 'AGILE SOFTWARE DEVELOPMENT', 'DEEP LEARNING LAB']
        <span key={index}>
          {props.code.map((code,codeIndex) => {
            const courseName = code[0];// ['DEEP LEARNING', '21AM504']
            if (courseName === period) {
              const key = `${index}_${codeIndex}`;
              let color_code;
              let font;
              let blur;
              if (index === reference) {
                color_code = "#BDEFF2";
                font = "15px";//if it is larger it is affect the box 
                blur = "none";
              } else {
                // color_code=colors[index];
                color_code = "#F2F2F2";
                font = "14px";
                blur = "blur(0.3px)";
              }
              return (
                <span style={{ fontSize: font, filter: blur }} key={key}>
                  <LargeBox
                    color={color_code}
                    code={code[1]}
                    course={period}
                  />
                </span>
              );
            }
            return null;
          })}
        </span>
      ))}
    </div>
  );
}
