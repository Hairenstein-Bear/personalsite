import './experience.css';
import React from 'react';
function Experience(){


    
    let jobCount = 2;
    function handleClick() {
        let jobNumber = "job" + jobCount.toString();
        let showJob = document.getElementById(jobNumber);
        showJob.style.display = "block";
        jobCount++;
        console.log(showJob);
        if (jobCount > 7){
            document.getElementById("nextJob").style.display = "none";
        }

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
    sarSupport.businessName = "Sarasota Support";
    sarSupport.jobTitle = "Full-Stack Developer/Client Application Support"; 
    sarSupport.startDate = "Aug 2015"; 
    sarSupport.endDate = "Nov 2016"; 
    sarSupport.technologyUsed = "Python, C++, Visual Studio, VBA, Windows Server, Active Directory, MS Office Suite, Office 365, G Suite, logmein, RDP, MyCase, Carbonite";
    sarSupport.responsiblities = [
        "Remotely supported client companies each with their own unique infrastructure and technologies.",
        "Created technical documentation to clarify company standard operating procedures.",
        "Reduced client downtime by 50% by using agile testing and development methodology.",
        "Enhanced help desk ticket system, reducing client first contact time by 30%.",
        "Designed and developed Python and SQL application for a commercial client with over 300 employees.",
        "Maintained and developed applications that increased user efficiency by 50%.",
        "Led in person and online training seminars for groups of up to 20 employees",];
    const eds = new Object();
    eds.businessName = "Ed's Tavern";
    eds.jobTitle = "Kitchen Manager"; 
    eds.startDate = "Apr 2009"; 
    eds.endDate = "Aug 2015"; 
    eds.technologyUsed = "Micros E7, Excel, Word, Outlook";
    eds.responsiblities = [
        "Achieved a 2% reduction in labor costs compared to the industry average through strategic data anlysis, resulting in significant cost savings for the company.",
        "Drove an 80% reduction in waste by providing effective staff training, resulting in increased efficiency and customer retention.",
        "Consistently achieved perfect scores during government health inspections.",
        "Directed product innovation to reduce waste while increasing profits."
    ];
    const macs = new Object();
    macs.businessName = "Macallister's Grill and Tavern";
    macs.jobTitle = "Shift Supervisor"; 
    macs.startDate = "Nov 2005"; 
    macs.endDate = "Apr 2009"; 
    macs.technologyUsed = "Excel, Word, Aloha";
    macs.responsiblities = [
        "2x Employee of the Year recipient",
        "Coordinated employees in fast paced high stress environment to complete customer orders in under 10 minutes.",
        "Monitored 20-30 simultaneous urgent orders while also checking product for consistency and order accuracy.",
        "Held foodcost to under 30% with effective inventory management strategies.",
        "Particpated in weekly business strategy meetings to shape company direction."
    ];
    const scar = new Object();
    scar.businessName = "Scarborough Research";
    scar.jobTitle = "Interview"; 
    scar.startDate = "Aug 2004"; 
    scar.endDate = "Nov 2005";
    scar.technologyUsed = "Propietary company software";
    scar.responsiblities = [
        "Regularly achieved 'Top Performer' award for effective collection of market research.",
        "Cold called targeted audience members to conduct televison, radio, and newspaper usage information with a >50% success rate.",
        "Trained and mentored new staff on effective interview techniques.",
    ];
    const lazy = new Object();
    lazy.businessName = "Lazy Lobster";
    lazy.jobTitle = "Line Cook"; 
    lazy.startDate = "Oct 2002"; 
    lazy.endDate = "May 2004"; 
    lazy.technologyUsed = "Aloha";
    lazy.responsiblities = [
        "Earned 3 promotions in my first year of employment.",
        "Ensured order accuracy in fast paced environment with several specific customer requirments.",
        "Maintained government health and safety certification."
    ];
    const fast = new Object();
    fast.businessName = "Fastenal Corp.";
    fast.jobTitle = "Inventory Specialist"; 
    fast.startDate = "Sep 2001"; 
    fast.endDate = "Oct 2002"; 
    fast.technologyUsed = "Propietary company software";
    fast.responsiblities = [
        "Conducted continuous inventory checks to prepare for company inventory audits.",
        "Packed orders with >90% accuracy.",
        "Assisted in house customers in locating products matching detailed user needs."
    ];
    
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
                        <li>{wolves.responsiblities[4]}</li>
                        <li>{wolves.responsiblities[5]}</li>
                        <li>{wolves.responsiblities[6]}</li>
                    </ul>
                </div>
            </div>
            
            <div className='job' id="job2">
                <div className='expTxt'>
                    <h3>{sarSupport.businessName}</h3><br />
                    <h4>{sarSupport.jobTitle} ({sarSupport.startDate}-{sarSupport.endDate})</h4>
                    <h5>Technology Used: <i>{sarSupport.technologyUsed}</i></h5>
                    <ul>
                        <li>{sarSupport.responsiblities[0]}</li>
                        <li>{sarSupport.responsiblities[1]}</li>
                        <li>{sarSupport.responsiblities[2]}</li>
                        <li>{sarSupport.responsiblities[3]}</li>
                        <li>{sarSupport.responsiblities[4]}</li>
                        <li>{sarSupport.responsiblities[5]}</li>
                    </ul>
                </div>
            </div>

            <div className='job' id="job3">
                <div className='expTxt'>
                    <h3>{eds.businessName}</h3><br />
                    <h4>{eds.jobTitle} ({eds.startDate}-{eds.endDate})</h4>
                    <h5>Technology Used: <i>{eds.technologyUsed}</i></h5>
                    <ul>
                        <li>{eds.responsiblities[0]}</li>
                        <li>{eds.responsiblities[1]}</li>
                        <li>{eds.responsiblities[2]}</li>
                        <li>{eds.responsiblities[3]}</li>
                    </ul>
                </div>
            </div>

            <div className='job' id="job4">
                <div className='expTxt'>
                    <h3>{macs.businessName}</h3><br />
                    <h4>{macs.jobTitle} ({macs.startDate}-{macs.endDate})</h4>
                    <h5>Technology Used: <i>{macs.technologyUsed}</i></h5>
                    <ul>
                        <li>{macs.responsiblities[0]}</li>
                        <li>{macs.responsiblities[1]}</li>
                        <li>{macs.responsiblities[2]}</li>
                        <li>{macs.responsiblities[3]}</li>
                    </ul>
                </div>
            </div>

            <div className='job' id="job5">
                <div className='expTxt'>
                    <h3>{scar.businessName}</h3><br />
                    <h4>{scar.jobTitle} ({scar.startDate}-{scar.endDate})</h4>
                    <ul>
                        <li>{scar.responsiblities[0]}</li>
                        <li>{scar.responsiblities[1]}</li>
                        <li>{scar.responsiblities[2]}</li>

                    </ul>
                </div>
            </div>

            <div className='job' id="job6">
                <div className='expTxt'>
                    <h3>{lazy.businessName}</h3><br />
                    <h4>{lazy.jobTitle} ({lazy.startDate}-{lazy.endDate})</h4>
                    <h5>Technology Used: <i>{lazy.technologyUsed}</i></h5>
                    <ul>
                        <li>{lazy.responsiblities[0]}</li>
                        <li>{lazy.responsiblities[1]}</li>
                        <li>{lazy.responsiblities[2]}</li>
                    </ul>
                </div>
            </div>

            <div className='job' id="job7">
                <div className='expTxt'>
                    <h3>{fast.businessName}</h3><br />
                    <h4>{fast.jobTitle} ({fast.startDate}-{fast.endDate})</h4>
                    <h5>Technology Used: <i>{fast.technologyUsed}</i></h5>
                    <ul>
                        <li>{fast.responsiblities[0]}</li>
                        <li>{fast.responsiblities[1]}</li>
                        <li>{fast.responsiblities[2]}</li>
                    </ul>
                </div>
            </div>
            <div className='nextJob' id="nextJob" onClick={handleClick}>Show Next Job</div>
        </div>
    )
}
export default Experience; 
