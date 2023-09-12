import { OneDay } from "../largeBox";
import { Date, DailyLink } from "../smallBox";
import banner from "../../assests/images/Daily_schedule-removebg-preview.png";
import leftStar from "../../assests/images/starLeft-removebg-preview.png";
import rightStar from "../../assests/images/startRight-removebg-preview.png";
import rainbow from "../../assests/images/rainbow_rbg.png";
import line from "../../assests/images/LINE-removebg-preview.png";
import "../main.css";
// https://script.google.com/macros/s/AKfycbyyL6ZhQqF6KlAxZoa5lDtEWrrsmhDY1kg6Oi2cxufLIOGhQw8kWHFLH7iwpnlCYnaIWA/exec

//fetching data from google sheet
const endpoint =
  "https://script.google.com/macros/s/AKfycbyyL6ZhQqF6KlAxZoa5lDtEWrrsmhDY1kg6Oi2cxufLIOGhQw8kWHFLH7iwpnlCYnaIWA/exec";
export let arr;
fetch(endpoint) //
  .then((res) => res.json())
  .then((out) => {
    arr = out;
    console.log(arr);
  });


function DailySchedule() {
  const dateObject = new Date();
console.log(typeof dateObject); // Should output "object"
console.log(dateObject instanceof Date); // Should output "true"

  return (
    <>
      <img src={rainbow} className="rainbow" alt="rainbow" />
      <div className="img">
        <img src={leftStar} className="leftstar" alt="leftstar" />
        <img src={banner} className="dailyScheduleText" alt="banner" />
        <img src={rightStar} className="rightstar" alt="rightstar" />
      </div>
      <img src={line} className="line" alt="line" />
      {/* <Date date={date} day={day} /> */}
      <OneDay />
      <Indicator />
      <DailyLink />
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
