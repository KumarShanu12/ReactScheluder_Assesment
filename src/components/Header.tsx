import React, { useState } from "react";

//hooks

interface shanu {
  name: string;
  roll: number;
}

// const calling=(event)=> {
//     console.log(event.target.value)
// }

const Header = (props: shanu) => {
  const [value, setVAlue] = useState("");

  function inputcatch(event: any) {
    setVAlue(event.target.value);
  }

  return (
    <>
      <h2>
        {" "}
        My name is {props.name} and my roll is {props.roll}
      </h2>

      <p>{value}</p>

      <input placeholder="Name" value={value} onChange={inputcatch} />
      <button
      //  onClick={inputF}
      >
        Submit{" "}
      </button>
    </>
  );
};
export default Header;
