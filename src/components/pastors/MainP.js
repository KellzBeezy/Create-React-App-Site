import React from "react";
import PageTitle from "../PageTitle";
import DisplayPastors from "./DisplayPastors";
import Categories from "./Categories";
import Donations from "./Donations";
import Gallery from "./Gallery";
import Remarks from "./Remarks";

const MainP = () => {
  return (
    <>
      <PageTitle title="Pastors" />
      <main class="main-content">
        <div class="fullwidth-block">
          <div class="container">
            <div class="row">
              <DisplayPastors />
              <div class="sidebar col-md-3 col-md-offset-1">
                <Categories />

                <Donations />

                <Gallery />

                <Remarks />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainP;
