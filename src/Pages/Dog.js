import React, { useState } from "react";

const Dog = ({
  getdogImage,
  dogImage,
}) => {

  return (
    <div>
      <h2>Random Dog Picture</h2>
      <button
        id="dogButton"
        type="submit"
        onClick={() => {
          getdogImage();
        }}
      >
        Generate Dog
      </button>
      <br />
      <br />
      <div id="dogPic">
        <img src={dogImage} style={{maxWidth:'80vw'}}></img>
      </div>
      <br />
    </div>
  );
};

export default Dog;
