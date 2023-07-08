import React, { useEffect } from "react";
import $ from "jquery";
import jquery from "jquery";

global.$ = global.jQuery = jquery;
require("../../FlexSlider");
const Slider = () => {
  useEffect(() => {
    $(".hero").flexslider({
      directionNav: false,
      controlNav: true,
    });
  }, []);
  return (
    <>
      <div className="hero">
        <div className="slides">
          <li
            style={{
              backgroundImage: "url('images/slide-1.jpg')",
            }}
          >
            <div className="container">
              <div className="slide-content">
                <small className="slide-subtitle">
                  Mount Camel Victory and Hope Ministries
                </small>
                <h2 className="slide-title">Slider now working</h2>

                <a href="pastors" className="button">
                  See our Pastors
                </a>
              </div>
            </div>
          </li>

          <li
            style={{
              backgroundImage: "url('images/slide-1.jpg')",
            }}
          >
            <div className="container">
              <div className="slide-content">
                <small className="slide-subtitle">
                  Mount Camel Victory and Hope Ministries
                </small>
                <h2 className="slide-title">kelvin</h2>

                <a href="pastors" className="button">
                  See our Pastors
                </a>
              </div>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default Slider;
