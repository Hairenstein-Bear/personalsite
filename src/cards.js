import './Cards.css';
import React, {useState} from 'react';
import weather from './images/weather.jpg';
import randomizer from './images/randomizer.png'
import wolveshead from './images/wolveshead.png';
import frogChase from './images/frogChase.png';
import bot from './images/bot.png';

function Cards() {
  return (
    <div className="wrapper" onLoad={focusCard()}>
        <div className="cardWrap" id="wrap"> 
        
            <div className="card" id="card1">
                <div className="cardName"><h3>Weather app</h3></div>
                <div className="cardImage"><a href="http://paulhair.me/weather.html"> <img src={weather} alt="Form requesting city and state to retreive weather data"></img></a></div>
                <div className="cardDetails" >This weather app, developed in VSCode uses Javascript, CSS, and HTML to fetch real-time weather data from the Open Weather Map REST API to provide users with accurate and up-to-date weather information.</div>
            </div> 

            <div className="card" id="card2">
                <div className="cardName"><h3>Sample Randomizer</h3></div>
                <div className="cardImage"><a href="http://paulhair.me/randomizer.html"> <img src={randomizer} alt="several boxes lined up which darken based on which tests need to be conducted"></img></a></div>
                <div className="cardDetails" >This application was created for a pharmaceutical client to reduce human bias in quality assurance testing for pharmaceutical compounding. It is built with mostly CSS, using Javascript to handle the randomization, and it was coded in VsCode.</div>
            </div>

            <div className="card" id="card3">
                <div className="cardName"><h3>Restaurant Landing Page</h3></div>
                <div className="cardImage"><a href="http://wolvesheadpizza.com"> <img src={wolveshead} alt="hero of clinking beer glasses with links at top of page and contact info at bottom of page."></img></a></div>
                <div className="cardDetails" >This Static website created in VSCode combines: HTML/CSS, Javascript, Jquery, and Bootstrap to create a responsive landing page to allow customers to quickly find out any business information they desire.</div>
            </div>

            <div className="card" id="card4">
                <div className="cardName"><h3>Frog Chase Game</h3></div>
                <div className="cardImage"><a href="http://paulhair.me/frogChase.html"> <img src={frogChase} alt="Swamp background with small green player character and a score in the top corner"></img></a></div>
                <div className="cardDetails">I made this game as a birthday gift for my nephew.  I had a blast making it and he loved it, to this day its one of my favorite projects.<br></br> The game uses the canvas HTML element to display the game and Javascript to handle controls and scoring.</div>
            </div>

            <div className="card" id="card5">
                <div className="cardName"><h3>AI Discord Bot(NPC Generator)</h3></div>
                <div className="cardImage"><a href="./images/bot.png"><img src={bot} alt="Description of an npc generated by chat gpt delivered by api to discord"></img></a></div>
                <div className="cardDetails">This Discord bot queries the chat GPT-3 API to generate random NPCs for Dungeon and Dragons games.<br></br>The bot is built using Python3 to connect the OpenAi API with Discord's API allowing asyncronous Ai chat features in discord channels.</div>
             </div>
        </div>
    </div>
  );
} 
// const [focusCard, setFocusCard] = useState(0);


 



export function focusCard(){
    const cards = document.querySelectorAll('.card');
    // let decrement = 0;
    cards.forEach(card => {
        card.addEventListener('click', function handleClick(event){
            cards.forEach(card => {
                    card.classList.remove("active");
                    document.getElementById("wrap").style.top = "0";
                    // decrement = 0;
                })
            card.classList.add("active");
            // decrement += 2;
            document.getElementById("wrap").style.top = "-2em";  
        })
    });
} 

export default Cards;