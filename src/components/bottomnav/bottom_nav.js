import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bottom_nav.css";
import { useEffect } from "react";


export function BottomNav() {
  // Using state to manage the active item
  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem("activeItem")) || 0
  );
  // Function to handle click events and update the active item
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
    // Update local storage when the active item changes
    useEffect(() => {
      localStorage.setItem("activeItem", activeItem);
    }, [activeItem]);
  

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeItem === 0 ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleItemClick(0)}>
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Today</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 1 ? 'active' : ''}`}>
          <Link to="/week" onClick={() => handleItemClick(1)}>
            <span className="icon">
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <span className="text">Week</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 2 ? 'active' : ''}`}>
          <Link to="/full" onClick={() => handleItemClick(2)}>
            <span className="icon">
              <ion-icon name="cube-outline"></ion-icon>
            </span>
            <span className="text">Full</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 3 ? 'active' : ''}`}>
          <Link to="/exam" onClick={() => handleItemClick(3)}>
            <span className="icon">
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
            <span className="text">Exam</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 4 ? 'active' : ''}`}>
          <Link to="/info" onClick={() => handleItemClick(4)}>
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
