import React from "react";
import RecentNews from "./RecentNews";
import LatestSermons from "./LatestSermons";
import UpComingEvents from "./UpComingEvents";
import Slider from "./Slider";

const Main = () => {
  return (
    <>
      {" "}
      <main className="main-content">
        <Slider />
        <div className="fullwidth-block">
          <RecentNews />
        </div>
        <div className="fullwidth-block">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <LatestSermons />
              </div>
              <UpComingEvents />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
