import React from "react";

const RecentNews = () => {
  return (
    <>
      <div className="container">
        <h2 className="section-title">Recent news</h2>

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="news">
              <image
                className="news-image"
                src="images/news-thumb-1.jpg"
              ></image>
              <h3 className="news-title">
                <a href="#">laboris nisi ut aliquip</a>
              </h3>
              <small className="date">
                <i className="fa fa-calendar"></i>24 mar 2014
              </small>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="news">
              <image
                className="news-image"
                src="images/news-thumb-2.jpg"
              ></image>
              <h3 className="news-title">
                <a href="#">laboris nisi ut aliquip</a>
              </h3>
              <small className="date">
                <i className="fa fa-calendar"></i>24 mar 2014
              </small>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="news">
              <image
                className="news-image"
                src="images/news-thumb-3.jpg"
              ></image>
              <h3 className="news-title">
                <a href="#">laboris nisi ut aliquip</a>
              </h3>
              <small className="date">
                <i className="fa fa-calendar"></i>24 mar 2014
              </small>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="news">
              <image
                className="news-image"
                src="images/news-thumb-4.jpg"
              ></image>
              <h3 className="news-title">
                <a href="#">laboris nisi ut aliquip</a>
              </h3>
              <small className="date">
                <i className="fa fa-calendar"></i>24 mar 2014
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentNews;
