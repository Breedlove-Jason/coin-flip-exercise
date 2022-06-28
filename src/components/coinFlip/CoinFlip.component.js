import React, { useState } from "react";
import "./CoinFlip.styles.css";
import Coin from "../coin/Coin.component";

function CoinFlip(props) {
  const [coin, setCoin] = useState({
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  });
  const defaultProps = {
    coins: [
      { side: "Heads", imgSrc: "headsCoin.jpg" },
      { side: "Tails", imgSrc: "tailsCoin.jpg" },
    ],
  };

  function handleClick() {
    const newCoin = Math.floor(Math.random() * 2);
    setCoin({
      currCoin: defaultProps.coins[newCoin],
      nFlips: coin.nFlips + 1,
      nHeads: coin.nHeads + (newCoin === 0 ? 1 : 0),
      nTails: coin.nTails + (newCoin === 1 ? 1 : 0),
    });
  }

  return (
    <div className={"CoinFlip"}>
      <h2>CoinFlip</h2>
      <button onClick={handleClick}>Flip Coin</button>
      <div className={"Coin"}>
        {coin.currCoin !== null ? (
          <Coin imgSrc={coin.currCoin.imgSrc} side={coin.currCoin.side} />
        ) : (
          "No Coin"
        )}
      </div>
      <p>{`Out of ${coin.nFlips} flips, there have been ${coin.nHeads} heads and ${coin.nTails} tails.`}</p>
    </div>
  );
}

export default CoinFlip;
