import React from "react";

const UpComingEvents = () => {
  return (
    <>
      {" "}
      <div className="col-md-6">
        <h2 className="section-title">Upcoming events</h2>
        <ul className="event-list">
          <li>
            <a href="#">
              <h3 className="event-title">africa mission trip</h3>
              <span className="event-meta">
                <span>
                  <i className="fa fa-calendar"></i>30 mar 2014
                </span>
                <span>
                  <i className="fa fa-map-marker"></i> Africa
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <h3 className="event-title">Bible school</h3>
              <span className="event-meta">
                <span>
                  <i className="fa fa-calendar"></i>30 mar 2014
                </span>
                <span>
                  <i className="fa fa-map-marker"></i> Saint paul church
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <h3 className="event-title">praying for kids</h3>
              <span className="event-meta">
                <span>
                  <i className="fa fa-calendar"></i>30 mar 2014
                </span>
                <span>
                  <i className="fa fa-map-marker"></i> true church
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <h3 className="event-title">love giving</h3>
              <span className="event-meta">
                <span>
                  <i className="fa fa-calendar"></i>30 mar 2014
                </span>
                <span>
                  <i className="fa fa-map-marker"></i> St cathedral
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <h3 className="event-title">god ont the vacation</h3>
              <span className="event-meta">
                <span>
                  <i className="fa fa-calendar"></i>30 mar 2014
                </span>
                <span>
                  <i className="fa fa-map-marker"></i> greenie lake
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <h3 className="event-title">homeless helping</h3>
              <span className="event-meta">
                <span>
                  <i className="fa fa-calendar"></i>30 mar 2014
                </span>
                <span>
                  <i className="fa fa-map-marker"></i> Detroit city
                </span>
              </span>
            </a>
          </li>
        </ul>

        <div className="text-center">
          <a href="#" className="button">
            See all events
          </a>
        </div>
      </div>
    </>
  );
};

export default UpComingEvents;
