import { WeekLink } from "../smallBox";
import banner from "../../assests/images/WEEKLY_SHECULE-removebg-preview.png";
import leftStar from "../../assests/images/starLeft-removebg-preview.png";
import rightStar from "../../assests/images/startRight-removebg-preview.png";
import rainbow from "../../assests/images/rainbow_rbg.png";
import { Table } from "../table";
import "../main.css";
function WeekSchedule() {
  return (
    <>
      <img src={rainbow} className="rainbow" alt="rainbow"/>
      <div className="img">
        <img src={leftStar} className="leftstar" alt="leftstar"/>
        <img src={banner} className="dailyScheduleText" alt="banner"/>
        <img src={rightStar} className="rightstar" alt="rightstar"/>
      </div>
        <Table />
      <WeekLink />
    </>
  );
}


export default WeekSchedule;
