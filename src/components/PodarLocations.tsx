import React, { FunctionComponent } from "react";

import PodarLocationi from "../pics/podarLocations.png";

const PodarLocations: FunctionComponent = () => {
  return (
    <>
      <div className="locations">
        <h1 id="he">PODAR LOCATIONS</h1>
        <div className="sch">
          <a href="#">
            {" "}
            <h3 id="all">All School </h3>{" "}
          </a>
          <h3 id="ap">Andhra Pradesh</h3>
          <h3 id="bhr">Bihar</h3>
          <h3 id="chatt">Chhattisgarh</h3>
          <h3 id="guj">Gujrat</h3>
          <h3 id="kar">Karnataka</h3>
          <h3 id="mp"> Madhya Pradesh</h3>
          <h3 id="pun">Punjab</h3>
          <h3 id="wb">West Bengal</h3>
          <h3 id="usc">Upcoming School</h3>
        </div>
      </div>
      <div>
        <img
          style={{ position: "relative", top: "300px" }}
          src={PodarLocationi}
          alt="noImage"
        />
      </div>
      <div className="locI">
        <h1> Podar International School</h1>

        <h3 style={{position:'relative',left:'50px',color:'chocolate'}}>Visit Us for more Infornation</h3>
      </div>
    </>
  );
};

export default PodarLocations;
