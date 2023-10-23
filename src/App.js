import DailySchedule from "./components/dailyschedule/dailyschedule";
import WeekSchedule from "./components/weekschedule/weekschedule";
import Full from "./components/full/fulltimetable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<DailySchedule />} />
         <Route path="/week" element={<WeekSchedule />} />
         <Route path="/full" element={<Full />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
