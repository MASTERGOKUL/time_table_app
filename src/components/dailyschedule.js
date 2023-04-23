import { OneDay } from "./largeBox";
import { Date ,DailyLink } from "./smallBox";
import banner from '../assests/images/Daily_schedule-removebg-preview.png'
import leftStar from '../assests/images/starLeft.png'
import rightStar from '../assests/images/startRight.png'
import rainbow from '../assests/images/rainbow_rbg.png'
import line from '../assests/images/LINE-removebg-preview.png'
import './main.css'
function DailySchedule() {
  return (
    <>
    <img src={rainbow} id="rainbow" />
    <div className="img">
    <img src={leftStar} id="leftstar" />
    <img src={banner} id="dailyScheduleText"  />
    <img src={rightStar} id="rightstar" />
    </div>
    <img src={line} id="line" />
    <Date />
    <OneDay />
    <DailyLink/>
    </>
  );
}

export default DailySchedule;
