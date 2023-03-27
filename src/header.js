import './header.css'
import github from './images/github.png';
import linkedin from './images/linkedin.png'
function Head() {
    return(
    <div className='headerWrap'>
        <div>
            <p>paul.hair917@gmail.com</p>
            <p>(941)524-1855</p>
        </div>
        <div>
            <h1>Paul Hair</h1>
        </div>
        <div>
        <a href="https://github.com/Hairenstein-Bear"><img src={github} /></a>
        <a href="https://www.linkedin.com/in/paul-hair-dev/"><img src={linkedin} /></a>
        </div>
    </div>
    );
}

export default Head;