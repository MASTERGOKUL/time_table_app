import { OneDay } from "../largeBox";
import { Date, DailyLink } from "../smallBox";
import banner from "../../assests/images/Daily_schedule-removebg-preview.png";
import leftStar from "../../assests/images/starLeft-removebg-preview.png";
import rightStar from "../../assests/images/startRight-removebg-preview.png";
import rainbow from "../../assests/images/rainbow_rbg.png";
import line from "../../assests/images/LINE-removebg-preview.png";
import "../main.css";
function DailySchedule() {
  return (
    <>
      <img src={rainbow} className="rainbow" />
      <div className="img">
        <img src={leftStar} className="leftstar" />
        <img src={banner} className="dailyScheduleText" />
        <img src={rightStar} className="rightstar" />
      </div>
      <img src={line} className="line" />
      <Date />
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
