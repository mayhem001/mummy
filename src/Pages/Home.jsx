import React from "react";
import schoolz from "../assets/schoolz.mp4";
import "./Home.css";
import propprietes from "../assets/proprietes.jpg";

function clickMe() {
  alert("click About for more information");
}

const Home = () => {
  return (
    <div className="backgroundvid">
      <video src={schoolz} autoPlay loop muted></video>
      <div className="content">
        <h1>CornerStone Academy</h1>
        <p>
          A Brittish curriculum school, providing impeccable learning
          experience, philosophy and ethos.
        </p>
      </div>
      <div className="intro">
        <div className="subcontent">
          <img src={propprietes} alt="" />
          <h1>0ur vission</h1>
          <p>
            Cornerstone Academy is aimed at Producing highly educationally
            equipped young people for now and the future through teaching of
            ethics and values.
          </p>
          <button onClick={clickMe}>Read More</button>
        </div>
      </div>
      <div className="footer">
        <p>cornerStone.</p>
      </div>
    </div>
  );
};

export default Home;
