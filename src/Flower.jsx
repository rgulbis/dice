import './Flower.css'
import { useState } from "react";

function Flower() {
    const [love, setLove] = useState(0);
    const [petals, setPetals] = useState(Math.floor(Math.random() * 11) + 5);
    function resetFlower() {
        setPetals(Math.floor(Math.random() * 11) + 5)
    }
    function pluckFlower() {
        if (petals > 0) {
            setLove(love == 1 ? 0 : 1);
            setPetals(petals - 1);
        }
        console.log(petals);
    }
    return (
        <article className="flower-game">
            <h1>Pukite!</h1>
            <p>Petal count: {petals}</p>
            <div className='flower'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="75"  height="75"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-flower"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1a4 4 0 0 1 4 4l-.002 .055l.03 -.018a3.97 3.97 0 0 1 2.79 -.455l.237 .056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1 -1.455 5.461l-.068 .036l.071 .039a4.01 4.01 0 0 1 1.555 5.27l-.101 .186a3.97 3.97 0 0 1 -5.441 1.468l-.03 -.02l.002 .057a4 4 0 0 1 -3.8 3.995l-.2 .005a4 4 0 0 1 -4 -4l.001 -.056l-.029 .019a3.97 3.97 0 0 1 -2.79 .456l-.236 -.056a3.97 3.97 0 0 1 -2.413 -1.865a4.01 4.01 0 0 1 1.453 -5.46l.07 -.038l-.071 -.038a4.01 4.01 0 0 1 -1.555 -5.27l.1 -.187a3.97 3.97 0 0 1 5.444 -1.468l.026 .018v-.055a4 4 0 0 1 3.8 -3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg>
                {Array.from({ length: petals }).map((_, i) => {
                    const angle = (i / petals) * 360;
                    const radius = 35;
                    const center = 50; // jabut tikapt cik div
                    
                    // Polar to Cartesian conversion
                    const x = Math.cos((angle * Math.PI) / 180) * radius + center;
                    const y = Math.sin((angle * Math.PI) / 180) * radius + center;

                    return(
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="petal icon icon-tabler icons-tabler-outline icon-tabler-leaf"
                            style={{
                                position: 'absolute',
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                                transformOrigin: 'center'
                            }}   
                            ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/> 
                        </svg>
                    )
                })}
            </div>
            <p>{love == 1 ? "🌹Mīl" : "😭Nemīl"}</p>
            <button onClick={resetFlower}>Reset</button>
            <button onClick={pluckFlower}>Pluck</button>
        </article>
    )
}

export default Flower