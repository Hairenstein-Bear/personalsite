import './experience.css';
import React from 'react';
function Experience(){
    function handleClick() {

        let showJob = document.getElementById("job2");
        document.getElementById("nextJob1").style.display="none";
        document.getElementById("nextJob2").style.display="block";
        showJob.style.display = "block";

        }
    const wolves = new Object();
    wolves.businessName = "Wolveshead Pizza and Wings";
    wolves.jobTitle = "General Manager/WebMaster"; 
    wolves.startDate = "Nov 2016"; 
    wolves.endDate = "Present"; 
    wolves.technologyUsed = "WordPress, HTML/CSS, RMPOS, Micros E7, MS Office Suite, Gsuite, Slack, Sling, GoDaddy, MyPhpAdmin, Logmein";
    wolves.responsiblities = [
        "Raised online customer engagement by 50% through utilization of SEO principles.",
        "Generated additonal monthly revenue of over $5000 through implementation of e-commerce solutions.",
        "Cut company expenditure by $50,000 with effective data analysis and business projection.",
        "Maintained WordPress site, using a combination of Gutenberg block editor, HTML/CSS, and PHP, which saved the company thousands in web development costs.",
        "Managed, Mentored, and Developed a multi-departmental team of 40 employees from startup to achieve gross revenue of over $3 million annually within 5 years.",
        "Cut customer complaints by 15% through people-first staff training programs.",
        "Negotiated with vendors to continuously meet food cost goal of <35%"];
    const sarSupport = new Object();
    wolves.businessName = "Wolveshead Pizza and Wings";
    wolves.jobTitle = "General Manager/WebMaster"; 
    wolves.startDate = "Nov 2016"; 
    wolves.endDate = "Present"; 
    wolves.technologyUsed = "WordPress, HTML/CSS, RMPOS, Micros E7, MS Office Suite, Gsuite, Slack, Sling, GoDaddy, MyPhpAdmin, Logmein";
    wolves.responsiblities = [
        "Raised online customer engagement by 50% through utilization of SEO principles.",
        "Generated additonal monthly revenue of over $5000 through implementation of e-commerce solutions.",
        "Cut company expenditure by $50,000 with effective data analysis and business projection.",
        "Maintained WordPress site, using a combination of Gutenberg block editor, HTML/CSS, and PHP, which saved the company thousands in web development costs.",
        "Managed, Mentored, and Developed a multi-departmental team of 40 employees from startup to achieve gross revenue of over $3 million annually within 5 years.",
        "Cut customer complaints by 15% through people-first staff training programs.",
        "Negotiated with vendors to continuously meet food cost goal of <35%"];
    return(
        <div className='expWrap'>
            <div className='job' id="job1">
                <div className='expTxt'>
                    <h3>{wolves.businessName}</h3><br />
                    <h4>{wolves.jobTitle} ({wolves.startDate}-{wolves.endDate})</h4>
                    <h5>Technology Used: <i>{wolves.technologyUsed}</i></h5>
                    <ul>
                        <li>{wolves.responsiblities[0]}</li>
                        <li>{wolves.responsiblities[1]}</li>
                        <li>{wolves.responsiblities[2]}</li>
                        <li>{wolves.responsiblities[3]}</li>
                        <li className='moreInfo' id="detail1">{wolves.responsiblities[4]}</li>
                        <li className='moreInfo' hidden>{wolves.responsiblities[5]}</li>
                        <li className='moreInfo' hidden>{wolves.responsiblities[6]}</li>
                    </ul>
                </div>
            </div>
            
            <div className='job' id="job2">
                <div className='expTxt'>
                    <h3>{wolves.businessName}</h3><br />
                    <h4>{wolves.jobTitle} ({wolves.startDate}-{wolves.endDate})</h4>
                    <h5>Technology Used: <i>{wolves.technologyUsed}</i></h5>
                    <ul>
                        <li>{wolves.responsiblities[0]}</li>
                        <li>{wolves.responsiblities[1]}</li>
                        <li>{wolves.responsiblities[2]}</li>
                        <li>{wolves.responsiblities[3]}</li>
                        {/* <input type="button" name='moreDetails' id="moreJob">More Details...</input> */}
                        <li className='moreInfo'>{wolves.responsiblities[4]}</li>
                        <li className='moreInfo'>{wolves.responsiblities[5]}</li>
                        <li className='moreInfo'>{wolves.responsiblities[6]}</li>
                    </ul>
                </div>
            </div>
            <div className='nextJob' id="nextJob1" onClick={handleClick}>Show Next Job</div>
            <div className='nextJob' id="nextJob2" onClick={handleClick}>Show Next Job</div>
            <div className='nextJob' id="nextJob3" onClick={handleClick}>Show Next Job</div>
            <div className='nextJob' id="nextJob4" onClick={handleClick}>Show Next Job</div>
            <div className='nextJob' id="nextJob5" onClick={handleClick}>Show Next Job</div>
            <div className='nextJob' id="nextJob6" onClick={handleClick}>Show Next Job</div>
        </div>
    )
}
export default Experience; 
