import React, { useEffect, useState } from "react";

import axios from "axios";

const ApiFetching = () => {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");

  const [moves, setMoves] = useState("");

  //using useEffect

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      // console.log(res)
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <h1>Name {name} </h1>
      <h1> Moves {moves} </h1>
      <h1>u select {num} haha </h1>g
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>
    </>
  );
};
export default ApiFetching;
