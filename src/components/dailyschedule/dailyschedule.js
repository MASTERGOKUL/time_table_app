import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { OneDay } from "../boxes/largeBox";
import { Date, DailyLink } from "../boxes/smallBox";
import banner from "../../assests/images/Today_schedule-removebg-preview.png";
import leftStar from "../../assests/images/starLeft-removebg-preview.png";
import rightStar from "../../assests/images/startRight-removebg-preview.png";
import rainbow from "../../assests/images/rainbow_rbg.png";
import { ref, get } from "firebase/database";
// import line from "../../assests/images/LINE-removebg-preview.png";
import "../main.css";
import { LoadingIndicator } from "../loading/loading";
// const endpoint =
//   "https://script.google.com/macros/s/AKfycbyisWn-lRRq7W8yX93kaxVP6OwV-DB6yiPsa2Z_rASNt18q-DYr91BK10jkpCs7zVoYdg/exec"; // Google Apps Script URL
import db from "../fetch/fetch";

function DailySchedule() {
  const [dayPeroids, setDayPeroids] = useState([]);
  const [code, setCode] = useState([]);
  const [period, setPeriod] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract day periods based on current day
  const dateObject = moment();
  const day = dateObject.format("dddd"); // Full day name
  const date = dateObject.format("DD/MM/YY"); // date in DD/MM/YY format
  const hour_minutes = dateObject.format("hh.mm a");

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from firebase
        const dataRef = ref(db, "/");
        let data ;
        await get(dataRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              data = snapshot.val();
              console.log(data);
            } else {
              console.log("No data found.");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        
        // time table of present day
        const dayPeriods = data.timetable.find((item)=>item[0]===day);
        setDayPeroids(dayPeriods ? dayPeriods.slice(1) : []);

        const code = data.course;
        setCode(code.slice(1));

        const period = data.period;
        setPeriod(period.slice(1));

        // Data fetching is completed, stop loading
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false); // Handle errors by stopping loading
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loading && <LoadingIndicator />}{" "}
      {/* Display loading indicator while fetching */}
      {!loading /* Display elements once fetching is completed */ && (
        <>
          <img src={rainbow} className="rainbow" alt="rainbow" />
          <div className="img">
            <img src={leftStar} className="leftstar" alt="leftstar" />
            <img src={banner} className="dailyScheduleText" alt="banner" />
            <img src={rightStar} className="rightstar" alt="rightstar" />
          </div>
          {/* <img src={line} className="line" alt="line" /> */}
          <Date date={date} day={day} />
          <OneDay day_peroids={dayPeroids} code={code} period={period} currentTime={hour_minutes} />
          <CurrentPeriod period={period} time={hour_minutes} />
          <Indicator />
          <DailyLink />
        </>
      )}
    </>
  );
}
function CurrentPeriod(props) {
  const period = props.period;
  const hour_minutes = props.time;
  let text;
  let time;
  for (let i = 0; i < period.length; i++) {
    let tempCurrent = period[i]; // ""09.45"
    let currentTime = moment(hour_minutes, "hh.mm a");

    let start = tempCurrent[0].replace('"', "").slice(0, -1); //""09.45"" => 09.45" => 09.45
    let end = tempCurrent[1].replace('"', "").slice(0, -1);
    const startTime = moment(start, "hh.mm a");
    const endTime = moment(end, "hh.mm a");
    const extremeStart = moment("08.44 am", "hh.mm a");
    const extremeEnd = moment("04.31 pm", "hh.mm a");
    // console.log(start+" "+end)
    // console.log(currentTime);
    if (currentTime.isBetween(startTime, endTime)) {
      text = tempCurrent[2];
      time = start + " to " + end;
      // console.log(text);
      break;
    } else if (currentTime.isBetween(extremeStart, extremeEnd)) {
      text = "Entha Schedulum Illa Bro... Enjoy Your Day 😊";
    }
  }
  return (
    <div className="currentPeriod">
      <p>{text}</p>
      <p>{time}</p>
    </div>
  );
}
function Indicator() {
  return (
    <div className="indiCon">
      <div className="indicator"></div>
      <p> - Current Period </p>
    </div>
  );
}

export default DailySchedule;
