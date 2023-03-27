import './background.css'
import bubble from './images/bubbletrans.png';
import React, {useState, useEffect} from 'react';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function useBubbles() {
  const [bubbles, setBubbles] = useState([]);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      let height = `${Math.random() * 40 + 10}px`;
      let width = height;
      let colors = ["blue", "red", "yellow", "green", "black", "purple"];
      let colorIndex = Math.floor(Math.random() * 6);
      const bubbleStyle = {
        backgroundImage: `url(${bubble})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: height,
        width: width,
        borderRadius: "50%",
        top: `${getRandomIntInclusive(50, 100)}%`,
        left: `${Math.random() * 100}%`,
        position: "absolute",
        margin: "10px 10px 10px 10px",
        opacity: "70%",
        zIndex:"0"
      };
      setBubbles((prevBubbles) => [...prevBubbles, bubbleStyle]);
    }, 2000);

    const floatIntervalId = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          const newTop = parseFloat(bubble.top) - .04;
          return { ...bubble, top: `${newTop}%` };
        })
      );
    }, 8);

    return () => {
      clearInterval(intervalId);
      clearInterval(floatIntervalId);
    };
  }, []);

  return bubbles;
}

function Background() {
  const bubbles = useBubbles();

  return (
    <div className="container">
      {bubbles.map((bubbleStyle, index) => (
        <div className="bubble" key={index} style={bubbleStyle}></div>
      ))}
    </div>
  );
}

export default Background;

