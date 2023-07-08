import React from "react";
import PageTitle from "../PageTitle";
import Donations from "../pastors/Donations";
import SermonGalary from "../sermons/SermonGalary";
import Remarks from "../pastors/Remarks";
import Categories from "../pastors/Categories";
import Events from "./Events";

const MainE = () => {
  return (
    <>
      <PageTitle title="Events" />
      <main class="main-content">
        <div class="fullwidth-block">
          <div class="container">
            <div class="row">
              <div class="content col-md-8">
                <Events />
              </div>
              <div class="sidebar col-md-3 col-md-offset-1">
                {" "}
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

export default MainE;
