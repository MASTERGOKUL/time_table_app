import { WeekLink } from "../smallBox";
import { useEffect, useState } from "react";
import banner from "../../assests/images/WEEKLY_SHECULE-removebg-preview.png";
import leftStar from "../../assests/images/starLeft-removebg-preview.png";
import rightStar from "../../assests/images/startRight-removebg-preview.png";
import rainbow from "../../assests/images/rainbow_rbg.png";
import { Table } from "../table";
import "../main.css";
import { LoadingIndicator } from "../loading";

const endpoint =
  "https://script.google.com/macros/s/AKfycbyisWn-lRRq7W8yX93kaxVP6OwV-DB6yiPsa2Z_rASNt18q-DYr91BK10jkpCs7zVoYdg/exec";

function WeekSchedule() {
  const [arr, setArr] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setArr(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          <Table arr={arr}/>
          <WeekLink />
        </>
      )}
    </>
  );
}

export default WeekSchedule;
