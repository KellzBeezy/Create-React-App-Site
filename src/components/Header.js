import React from "react";
import $ from "jquery";

const Header = () => {
  const toggle = (event) => {
    event.preventDefault();
    $(".mobile-navigation").slideToggle();
    $(".mobile-navigation").append($(".main-navigation .menu")).clone();
  };
  return (
    <>
      {" "}
      <header className="site-header" id="header">
        <div className="container">
          <a href="#g" className="branding">
            <img src="images/logo.png" alt="" className="logo" />
            <h1 className="site-title">
              Mount Camel Victory and Hope Ministries
            </h1>
          </a>
          <div className="main-navigation" id="header">
            <button className="menu-toggle" onClick={toggle}>
              <i className="fa fa-bars"></i> Menu
            </button>
            <ul className="menu">
              <li className="menu-item current-menu-item">
                <a href="/">
                  Homepage <small>Lorem ipsum</small>
                </a>
              </li>
              <li className="menu-item">
                <a href="/pastors">
                  Pastors <small>Cupidatat non proident</small>
                </a>
              </li>
              <li className="menu-item">
                <a href="/sermons">
                  Seremons <small>Laboris nisi aliquip</small>
                </a>
              </li>
              <li className="menu-item">
                <a href="/events">
                  Events <small>Sunt in culpa</small>
                </a>
              </li>
              {/* <li className="menu-item">
                <a href="families.html">
                  Families <small>Aute irure</small>
                </a>
              </li>
              <li className="menu-item">
                <a href="h#">
                  Contact <small>lorem ipsum</small>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="mobile-navigation"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
