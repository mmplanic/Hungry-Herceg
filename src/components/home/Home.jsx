import React from "react";
import ActivePolls from "./ActivePolls";
import ActiveOrders from "./ActiveOrders";
import "./home.css";
import NavBar from "../NavBar/NavBar";
import FinishedOrders from "./FinishedOrders";

const Home = ({ history }) => {
  return (
    <div className="wrapper">
      <NavBar history={history} />
      <div className='activepollOrderWrapper'>
        <div className="active">
          <div className='activeCardsWrapper'>
            <ActivePolls history={history} />
            <ActiveOrders />
          </div>
          <div className='fnshOrdWrapp'>
          <FinishedOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
