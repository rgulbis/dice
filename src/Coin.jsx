import './Coin.css'
import { useState } from "react";

import coin1 from "./assets/coin/coin-1.svg";
import coin2 from "./assets/coin/coin-2.svg";

const coinImg = [coin1, coin2];

function Coin() {
    const [coinValue, setCoinValue] = useState(1);
    function flipCoin() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    setCoinValue(randomNumber);
    }      
    return (
        <article className="coin">
        <h2>Coin Flip</h2>
        <img 
            src={coinImg[coinValue - 1]}
        /> 
        <button onClick={flipCoin}>Flip</button>
        </article>
    )
}

export default Coin;