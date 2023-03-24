import './terminal.css';
import TypeIt from 'typeit-react';

function Terminal(){
    return(
        <div className='wrapper'>
            <div className='termBackground'>
                    <p className='closeWindow'>_ &#9633; x</p>
                <div className='text'>
                    <TypeIt options={{speed: 60}}>&lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;<h2>Paul Hair</h2>&lt;/h1&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;<h3>Full-Stack Web Developer</h3>&lt;/h2&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br />Hi! My name is Paul, I'm a software development professional with over 15 years of managment experience and 10 years of customer service experience. I have working knowledge of HTML/CSS, JavaScript, Python, SQL, and Php.   <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
                    <br />&lt;/html&gt;
                    </TypeIt>
                </div>
            </div>

        </div>
    );
}



export default Terminal;