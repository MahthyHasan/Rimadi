import React from 'react';
import PropTypes from 'prop-types';
import './dashCom.css';
import { NavLink } from "react-router-dom";

function TopNavigationBar({ tabs }) {
  return (
    <nav className="navbar">
      <ul className="navList">
        {tabs.map((tab, index) => (            
          <li key={index} className="navItem">

            <NavLink
             className={({ isActive }) => 
                isActive
                    ? "navLink navlink-active"
                    : "navLink"
            }
            to={tab.link} 
             >
                {tab.label}
            </NavLink>            
          </li>
        ))}
      </ul>
    </nav>
  );
}

TopNavigationBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopNavigationBar;
