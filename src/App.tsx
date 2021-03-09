import React from "react";
import Board from './components/Board';
import Card from './components/Card';


function App() {
  return (

    <div className='App'>
        <main className="flexbox">

          <Board id='board-1' className='board'>
              <Card id='card-1' className='card' draggable='true'>
                <p>Card one</p> 


              </Card>

          </Board>

          <Board id='board-2' className='board'>
              <Card id='card-2' className='card' draggable='true'>
                <p>Card two</p> 


              </Card>

          </Board>

          

        </main>


    </div>

  )
  
}

export default App;















// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import "./App.css";
// import Login from "./components/LoginPage";
// import SignUp from "./components/SignUp";
// import About from "./components/About";
// import Home from "./components/Home";
// import Menu from "./components/Menu";
// import InquiryForm from "./components/InquiryForm";
// import ApiFetching from "./components/ApiFetching";

// function App() {
//   return (
//     <>
//       <Menu />
//       <Switch>
//         <Route path="/" component={About} exact />
//         <Route path="/home" component={Home} exact />
//         <Route path="/Login" component={Login} exact />

//         <Route path="/Signup" component={SignUp} exact />
//       </Switch>{" "}
//       *{/* // <ApiFetching/> */}
//       // {/* <SignUp/> */}
//       // {/* <Login/> */}
//       // {/* <Header    name={'shanu'} roll={43} /> */}
//     </>
//   );
// }

// export default App;
