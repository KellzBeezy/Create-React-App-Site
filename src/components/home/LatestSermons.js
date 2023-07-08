import React from "react";

const LatestSermons = () => {
  return (
    <>
      <h2 className="section-title">Latest seremons</h2>
      <ul className="seremon-list">
        <li>
          <img src="images/small-thumb-1.jpg" alt="" />
          <div className="seremon-detail">
            <h3 className="seremon-title">
              <a href="#">I believe in god with all my heart</a>
            </h3>
            <div className="seremon-meta">
              <div className="pastor">
                <i className="fa fa-user"></i> Alan Ray
              </div>
              <div className="date">
                <i className="fa fa-calendar"></i> 18 mar 2014
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src="images/small-thumb-2.jpg" alt="" />
          <div className="seremon-detail">
            <h3 className="seremon-title">
              <a href="#">Trusting in jesus and god</a>
            </h3>
            <div className="seremon-meta">
              <div className="pastor">
                <i className="fa fa-user"></i> David Clark
              </div>
              <div className="date">
                <i className="fa fa-calendar"></i> 18 mar 2014
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src="images/small-thumb-3.jpg" alt="" />
          <div className="seremon-detail">
            <h3 className="seremon-title">
              <a href="#">Love your kids</a>
            </h3>
            <div className="seremon-meta">
              <div className="pastor">
                <i className="fa fa-user"></i> anthony roberts
              </div>
              <div className="date">
                <i className="fa fa-calendar"></i> 18 mar 2014
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="text-center">
        <a href="#" className="button">
          See all seremons
        </a>
      </div>
    </>
  );
};

export default LatestSermons;
