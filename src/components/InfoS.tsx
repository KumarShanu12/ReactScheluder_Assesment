import React, { FunctionComponent } from "react";

import podarStrip from "../pics/podarStrip.png";
const InfoS: FunctionComponent = () => {
  return (
    <>
      <div className="videoF">
        <iframe
          width="650"
          height="415"
          src="https://www.youtube.com/embed/v=eALUIIaa5us&feature=youtu.be"
        ></iframe>
      </div>
      <div className="infor">
        <h2 style={{ color: "blueviolet", position: "relative", left: "50px" }}>
          TRADITION OF EXCELLENCE
        </h2>
        <br></br>
        <h4>
          Educating 1,60,000 students through 131 schools across India, Podar
          Education Network has established itself as a leader in the Indian
          Education Sector. Established in 1927, Podar Education Network strives
          to create modern citizens who are ready to make global changes.
        </h4>
        <a href="#">Read More </a>
      </div>
      <div className="strip">
        <img src={podarStrip} />
      </div>
    </>
  );
};
export default InfoS;
