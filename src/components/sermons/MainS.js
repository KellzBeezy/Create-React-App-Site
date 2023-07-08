import React from "react";
import PageTitle from "../PageTitle";
import Donations from "../pastors/Donations";
import Categories from "../pastors/Categories";
import Remarks from "../pastors/Remarks";
import SermonGalary from "./SermonGalary";
import UpComingEvents from "../home/UpComingEvents";
import UpcomingSermons from "./UpcomingSermons";
import LatestSermons from "../home/LatestSermons";

const MainS = () => {
  return (
    <>
      <PageTitle title="Sermons" />
      <main class="main-content">
        <div class="fullwidth-block">
          <div class="container">
            <div class="row">
              <div class="content col-md-8">
                <UpcomingSermons />
                <LatestSermons />
              </div>
              <div class="sidebar col-md-3 col-md-offset-1">
                <Categories />

                <Donations />

                <SermonGalary />

                <Remarks />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainS;
