import React from "react";
import { Link , useLocation } from "react-router-dom";
import "./bottom_nav.css";


export function BottomNav() {

  const location = useLocation();
  console.log(location);
  const location_path = location.pathname;


  return (
    <div className="navigation">
      <ul>
        <li className={`list ${location_path === '/' ? 'active' : ''}`}>
          <Link to="/">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Today</span>
          </Link>
        </li>
        <li className={`list ${location_path === '/week' ? 'active' : ''}`}>
          <Link to="/week">
            <span className="icon">
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <span className="text">Week</span>
          </Link>
        </li>
        <li className={`list ${location_path === '/full' ? 'active' : ''}`}>
          <Link to="/full">
            <span className="icon">
              <ion-icon name="cube-outline"></ion-icon>
            </span>
            <span className="text">Full</span>
          </Link>
        </li>
        <li className={`list ${location_path === '/exam' ? 'active' : ''}`}>
          <Link to="/exam">
            <span className="icon">
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
            <span className="text">Exam</span>
          </Link>
        </li>
        <li className={`list ${location_path === '/info' ? 'active' : ''}`}>
          <Link to="/info">
            <span className="icon">
              <ion-icon name="information-circle-outline"></ion-icon>
            </span>
            <span className="text">Info</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
