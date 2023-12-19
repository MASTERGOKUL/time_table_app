import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./bottom_nav.css";
import { useEffect } from "react";


export function BottomNav() {
  // Using state to manage the active item
  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem("activeItem")) || 0
  );

  // Access the history object to navigate programmatically
  const history = useNavigate ();

  // Function to handle click events and update the active item
  const handleItemClick = (index, path) => {
    setActiveItem(index);
    history.push(path); // Navigate to the specified path
  };

    // Update local storage when the active item changes
    useEffect(() => {
      localStorage.setItem("activeItem", activeItem);
    }, [activeItem]);
  

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeItem === 0 ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleItemClick(0, "/")}>
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Today</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 1 ? 'active' : ''}`}>
          <Link to="/week" onClick={() => handleItemClick(1, "/week")}>
            <span className="icon">
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <span className="text">Week</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 2 ? 'active' : ''}`}>
          <Link to="/full" onClick={() => handleItemClick(2,'/full')}>
            <span className="icon">
              <ion-icon name="cube-outline"></ion-icon>
            </span>
            <span className="text">Full</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 3 ? 'active' : ''}`}>
          <Link to="/exam" onClick={() => handleItemClick(3,'/exam')}>
            <span className="icon">
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
            <span className="text">Exam</span>
          </Link>
        </li>
        <li className={`list ${activeItem === 4 ? 'active' : ''}`}>
          <Link to="/info" onClick={() => handleItemClick(4,'/info')}>
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
