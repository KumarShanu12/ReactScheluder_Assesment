import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import  validator from 'validator';
import { Button } from "react-bootstrap";
import image from "../pics/signUpImage.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  function checkValidity() {
    // console.log('name'+name+'mail'+mail+'address'+address+'phone'+phone)

    if (phone.length !== 10) {
      alert("Please  Provide Correct 10 digit phone number");
    }

    console.log("##");
  }

  return (
    <div className="signUp">
      <div className="Image">
        <img src={image} alt="Logo" />;
      </div>

      <h2 style={{ position: "absolute", left: "400px" }}></h2>
      <hr></hr>
      <br></br>

      <span style={{ position: "absolute", left: "400px", top: "50px" }}>
        {" "}
        Name:{" "}
      </span>
      <span style={{ position: "absolute", left: "400px", top: "100px" }}>
        {" "}
        E-Mail:{" "}
      </span>

      <span style={{ position: "absolute", left: "400px", top: "150px" }}>
        {" "}
        Phone:{" "}
      </span>

      <span style={{ position: "absolute", left: "400px", top: "200px" }}>
        {" "}
        City:{" "}
      </span>
      <span style={{ position: "absolute", left: "380px", top: "250px" }}>
        {" "}
        Date of Birth:{" "}
      </span>
      <span style={{ position: "absolute", left: "380px", top: "320px" }}>
        {" "}
        Address:{" "}
      </span>

      <input
        style={{
          position: "absolute",
          left: "500px",
          top: "50px",
          textAlign: "center",
        }}
        placeholder="Enter your name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <input
        style={{
          position: "absolute",
          left: "500px",
          top: "100px",
          textAlign: "center",
        }}
        placeholder="enter your mail"
        type="email"
        value={mail}
        onChange={(event) => {
          setMail(event.target.value);
        }}
      ></input>

      <input
        style={{
          position: "absolute",
          left: "500px",
          top: "150px",
          textAlign: "center",
        }}
        placeholder="Enter your phone"
        type="number"
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />

      <div style={{ position: "absolute", left: "550px", top: "200px" }}>
        <select
          id="city"
          name="city"
          style={{ position: "absolute", width: "240px", left: "-50px" }}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        >
          <option value="Delhi">Delhi</option>
          <option value="Patna">Patna</option>
          <option value="Agra">Agra</option>
          <option value="Shimla">Shimla</option>
        </select>
      </div>

      <div style={{ position: "absolute", left: "500px", top: "250px" }}>
        <input
          type="date"
          id="birthday"
          name="birthday"
          style={{ width: "240px" }}
        ></input>

        <input
          style={{
            position: "absolute",
            left: "00px",
            top: "70px",
            textAlign: "center",
          }}
          placeholder="Enter your Address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </div>
      <Button
        style={{
          position: "absolute",
          top: "400px",
          left: "550px",
          width: "auto",
        }}
        className="btn btn-primary "
        onClick={() => {
          checkValidity();
        }}
      >
        {" "}
        Submit Here
      </Button>
    </div>
  );
};
export default SignUp;

//
// import { Button } from 'react-bootstrap'
// import React, { useState } from 'react'

// const SignUp=()=>{

//    const [name,setName]=useState('');
//    const [mail,setMail]=useState('');
//    const [address,setAddress]=useState('');
//    const [phone,setPhone]=useState('');

// const validateMail=(val:any)=>{

//     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

//     if(val.match(mailformat))
//     {
//     alert("You have entered a valid email address!");
// }
// else{
//     alert("oops wrong email id..")

// }

// // const validatePhone=(pho:any)=>{

// // if(typeof(pho)=='string'){
// //     alert('wrong ')
// // }
// // else{
// // //
// // }

// // }
//     return(

//  <>

//             <h2 style={{position:'absolute',left:'400px'}}>Enter Your Details Here</h2>

//             <span style={{position:'absolute',left:'400px',top:'50px'}} > Name: </span>
//             <span style={{position:'absolute',left:'400px',top:'100px'}} > E-Mail: </span>

//             <span style={{position:'absolute',left:'400px',top:'150px'}} > Phone: </span>

//           <input
//           style={{position:'absolute',left:'500px',top:"50px",textAlign:'center'}}
//            placeholder ='enter your name'
//            value={name}
//            onChange={(event)=>{
//                setName(event.target.value)

//            }}
//           />
//             <p> {name}</p>

//     <input

//           style={{position:'absolute',left:'500px',top:"100px",textAlign:'center'}}
//            placeholder ='enter your mail'
//            type='email'
//            value={mail}
//            onChange={(event)=>{
//                setMail(event.target.value)

//            }}
//           >

//           </input>

//           <input
//           style={{position:'absolute',left:'500px',top:"150px",textAlign:'center'}}
//            placeholder ='Enter your Address'

//            value={address}
//            onChange={(event)=>{
//                setAddress(event.target.value)

//            }}
//           />

// <input
//           style={{position:'absolute',left:'500px',top:"150px",textAlign:'center'}}
//            placeholder ='Enter your phone'

//            value={phone}
//            onChange={(event)=>{
//                setPhone(event.target.value)

//            }}
//           />

//     {/* <p>Phone Number is {phone}</p> */}

//   <Button
//   style={{position:'absolute',top:'250px'}}
//    className='btn btn-primary '

//    onClick={()=>{

//     validateMail(mail);
//     validatePhone(phone);

//    }}

//   block> Submit Here</Button>

//  </>
//     )
// }
// }
// export default SignUp;
