import React, { FunctionComponent } from "react";

const InquiryForm: FunctionComponent = () => {
  return (
    <>
      <div className="enquiry">
        <h1>ENQUIRY FORM</h1>
        <br></br>
        <h3>
          We request you to fill up the enquiry form and our team will reach out
          to you at the earliest.
        </h3>
      </div>
      <br></br>
      <div className="enquiry1">
        <label id="placeL">Select Place</label>
        <select id="selState">
          <option>Goa</option>
          <option>Bihar</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Agra</option>
        </select>
        <br></br>
        <label id="schL">Select School</label>
        <select id="drpSch">
          <option>Podar International School Goa</option>
          <option>Podar International School Patna</option>
          <option>Podar International School Mumbai</option>
          <option>Podar International School Delhi</option>
          <option>Podar International School Agra</option>
        </select>

        <label id="nameL">First Name:</label>
        <input id="nameI"></input>
        <br></br>

        <label id="namelL">Last Name:</label>
        <input id="namelI"></input>
        <br></br>

        <label id="stanL">Standard:</label>
        <input id="stanI"></input>
        <br></br>
        <label id="mailL">Email:</label>
        <input id="mailI"></input>
        <br></br>
        <label id="phoneL">Phone</label>
        <input id="phoneI"></input>
      </div>
    </>
  );
};
export default InquiryForm;
