import React from "react";

const PageTitle = (props) => {
  return (
    <>
      <div
        class="page-head"
        style={{
          backgroundImage: "url('images/page-head-1.jpg')",
        }}
      >
        <div class="container">
          <h2 class="page-title">{props.title}</h2>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
