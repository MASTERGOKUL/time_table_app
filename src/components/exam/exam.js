import { useEffect, useState } from "react";
import "./exam.css";
import { LoadingIndicator } from "../loading/loading";
import db from "../fetch/fetch";
import { ref, get } from "firebase/database";
// const endpoint =
//   "https://script.google.com/macros/s/AKfycbyisWn-lRRq7W8yX93kaxVP6OwV-DB6yiPsa2Z_rASNt18q-DYr91BK10jkpCs7zVoYdg/exec";

function Exam() {
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from firebase
        const dataRef = ref(db, "/exam");
        let data;
        await get(dataRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              data = snapshot.val();
              setExam(data.slice(1));
            //   console.log(data);
            } else {
              console.log("No data found.");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        // console.log(data);

        // Data fetching is completed, stop loading
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false); // Handle errors by stopping loading
      }
    }
    // console.log(exam);

    fetchData();
  });
  return (
    <>
      {loading && <LoadingIndicator />}{" "}
      {/* Display loading indicator while fetching */}
      {!loading /* Display elements once fetching is completed */ && (
        <div>
          <h1 className="exam_title">🎓{exam[0][0]}</h1>
          <div className="time">
            <span className="forenoon">🌞FN - {exam[0][3]}</span>
            {/* <span className="afternoon">🌙AN {exam[0][4]}</span> */}
          </div>
          <table id="exam_table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {exam.map((day, index) => (
                <tr key={index}>
                  <td>{day[1]}</td>
                  <td>{day[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Exam;
