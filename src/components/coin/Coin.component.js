import React from "react";
import "./Coin.styles.css";
import CoinFlip from "../coinFlip/CoinFlip.component";

function Coin(props) {
  return (
    <div>
      <img src={props.imgSrc} alt={"Coins"} alt={props.side} />
    </div>
  );
}
export default Coin;
