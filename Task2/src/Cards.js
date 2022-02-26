import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          
          <div class="column">
            <div class="photo">
              <img src={user.avatar} alt=""></img>
              <div class="info">
                <h2>
                  {user.first_name}&nbsp;
                  <span>{user.last_name}</span>
                </h2>
                <p>{user.email}</p>
                <div class="card">
                  <a href="#services" class="circle">
                   <span> Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        );
      })}
    </>
  );
}
