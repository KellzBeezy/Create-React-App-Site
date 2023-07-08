import React from "react";

const Gallery = () => {
  return (
    <>
      {" "}
      <div class="widget">
        <h3 class="widget-title">Gallery updates</h3>

        <div class="galery-thumb">
          <a href="#d">
            <img src="images/gallery-thumb-1.jpg" alt="e" />
          </a>
          <a href="#d">
            <img src="images/gallery-thumb-2.jpg" alt="d" />
          </a>
          <a href="#dd">
            <img src="images/gallery-thumb-3.jpg" alt="c" />
          </a>
          <a href="#d">
            <img src="images/gallery-thumb-4.jpg" alt="v" />
          </a>
          <a href="#d">
            <img src="images/gallery-thumb-5.jpg" alt="z" />
          </a>
          <a href="#d">
            <img src="images/gallery-thumb-6.jpg" alt="s" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;
