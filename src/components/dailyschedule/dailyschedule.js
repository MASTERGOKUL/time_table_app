import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { OneDay } from "../largeBox";
import { Date, DailyLink } from "../smallBox";
import banner from "../../assests/images/Today_schedule-removebg-preview.png";
import leftStar from "../../assests/images/starLeft-removebg-preview.png";
import rightStar from "../../assests/images/startRight-removebg-preview.png";
import rainbow from "../../assests/images/rainbow_rbg.png";
// import line from "../../assests/images/LINE-removebg-preview.png";
import "../main.css";
import { LoadingIndicator } from "../loading";
const endpoint =
  "https://script.google.com/macros/s/AKfycby8RkmHQOQ_cs13LzDx4OoHJ0aDu2pUPVaf3cxtTexLJIy3bufNw8fISILRM8OrXVismw/exec";

function DailySchedule() {
  const [arr, setArr] = useState(null);
  const [dayPeroids, setDayPeroids] = useState([]);
  const [code, setCode] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract day periods based on current day
  const dateObject = moment();
  const day = dateObject.format("dddd"); // Full day name
  const date = dateObject.format("DD/MM/YY"); // date in DD/MM/YY format

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setArr(data);
        const dayPeriods = data.data.find((item) => item[day]);
        setDayPeroids(dayPeriods ? dayPeriods[day] : []);
        const code = data.code;
        setCode(code);
        // console.log(code);
        // Data fetching is completed, stop loading
        setLoading(false);
      } catch (error) {
        setArr(arr);
        // console.error("Error fetching data:", error);
        setLoading(false); // Handle errors by stopping loading
      }
    }

    fetchData();
  }, [arr, day]);

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
          <OneDay day_peroids={dayPeroids} code={code} />
          <Indicator />
          <DailyLink />
        </>
      )}
    </>
  );
}

function Indicator() {
  return (
    <div className="indiCon">
      <div className="indicator"></div>
      <p> - Current Period</p>
    </div>
  );
}

export default DailySchedule;
