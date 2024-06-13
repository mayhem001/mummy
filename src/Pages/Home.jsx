import React from "react";
import schoolz from "../assets/schoolz.mp4";
import "./Home.css";
import propprietes from "../assets/proprietes.jpg"

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            similique saepe, rerum ullam adipisci inventore nam suscipit
            accusantium voluptatem id maxime reiciendis est, sed ad aliquid
            incidunt, deleniti dicta voluptatum quis velit ab laborum! Modi,
            laboriosam ipsam. Recusandae obcaecati quasi temporibus laborum
            minus veritatis natus. Minima aliquid accusamus modi explicabo.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
