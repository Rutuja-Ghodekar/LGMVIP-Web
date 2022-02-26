import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./Cards.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Router>
        <section className="box">
          <div class="nav" id="myTopnav">
            <a
              rel="noreferrer"
              href="https://lgmvip-sept-task2.netlify.app"
              target="_blank"
              class="active"
            >
             LGMVIP TASK-2
            </a>
            <a href="#getusers" class="btn" onClick={handleClick}>
              Get Users
            </a>
          </div>

          <div className="boxcontainer">
            <div className="row justify-content-center ">
              {isButtonClick ? (
                isDateLoaded ? (
                  <Cards userData={userData} />
                ) : (
                  <div class="line"></div>
                )
              ) : (
                <div className="users">
                  <p>Click on "Get Users" button  !!</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
