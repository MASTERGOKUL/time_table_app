import DailySchedule from "./components/dailyschedule/dailyschedule";
import WeekSchedule from "./components/weekschedule/weekschedule";
import Full from "./components/full/fulltimetable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNav } from "./components/bottomnav/bottom_nav";
import Exam from "./components/exam/exam";
import Info from "./components/info/info";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DailySchedule />} />
          <Route path="/week" element={<WeekSchedule />} />
          <Route path="/full" element={<Full />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
