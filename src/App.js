import { useState } from "react";
import "./App.css";
import MyIcon from "./Icon"; // Profile photo
import { FaUser, FaCode, FaBriefcase, FaEnvelope, FaDownload } from "react-icons/fa";
import ContactForm from "./ContactForm";

function App() {
  const [page, setPage] = useState("home");
  const skillIcons = [
    require("./assets/a.png"),
    require("./assets/b.png"),
    require("./assets/c.png"),
    require("./assets/d.png"),
    require("./assets/e.png"),
    require("./assets/f.png"),
    require("./assets/g.png"),
    require("./assets/h.png"),
    require("./assets/i.png"),
    require("./assets/j.png"),
    require("./assets/k.png"),
    require("./assets/l.png"),
    require("./assets/m.png"),
    require("./assets/n.png"),
    require("./assets/o.png"),
    require("./assets/p.png"),
    require("./assets/a.png"),
    require("./assets/b.png"),
    require("./assets/c.png"),
    require("./assets/d.png"),
    require("./assets/e.png"),
    require("./assets/f.png"),
    require("./assets/g.png"),
    require("./assets/h.png"),
    require("./assets/i.png"),
    require("./assets/j.png"),
    require("./assets/k.png"),
    require("./assets/l.png"),
    require("./assets/m.png"),
    require("./assets/n.png"),
    require("./assets/o.png"),
    require("./assets/p.png"),
    
  ];
  // Resume File
  const resumeUrl = require("./assets/Denil_John.pdf"); // Rename your resume and place it in the public folder

  return (
    <div className="container">
  {/* Left Side: Profile Photo */}
 
    <div className="left-section">
       {page === "home" && (
        <div className="profile-photo" >
      <MyIcon  />
</div>
    )}
    {page === "skills" && (
   <>
  <div className="icon-rain-container">
      {skillIcons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt="Skill Icon"
          className="rain-icon"
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDelay: `${Math.random() * 3}s`, // Random delay
            animationDuration: `${3 + Math.random() * 2}s` // Random speed
          }}
        />
      ))} 
             
      <div className="skills-container">
        

        <div className="skill-card">
        <h3>Languages & Frameworks</h3>
        <div className="skill-list">
          <span>Javascript</span>
          <span>TypeScript</span>
          <span>Java</span>
          <span>Kotlin</span>
          <span>Node</span>

        </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-card">
        <h3>Storage</h3>
        <div className="skill-list">
          <span>Firebase</span>
          <span>Room</span>
          <span>Realm</span>
          <span>Dynamo</span>
        </div>
        </div>
        <div className="skill-card">
        <h3>Cloud Computing Platform</h3>
        <div className="skill-list">
          <span>AWS Amplify</span>
          <span>AWS Datastore</span>
          <span>AWS DynamoDB</span>
          <span>AWS S3</span>
        </div>
        </div>
       
      </div>
      
    </div>
    
  </>
  )}
   {page === "experience" && (
     <div >
      <h1 className="text-animate">Projects</h1>
    <div className="card-container">
    <div className="card" onClick={() => window.open("https://freightcyber.com/", "_blank")} >
    <h3>Freight Cyber (Australia) </h3>
    <div className="skill-list">
    <span>Load restraint</span>
    <span>Offline </span>
      <span>Biometrics & Security</span>
      <span> mapping</span>
      
    </div>

    </div>
    
    <div className="card"  onClick={() => window.open("https://www.gforceaus.com/", "_blank")} >
    <h3>G Force (Australia) </h3>
    <div className="skill-list">
      <span>Aws Offline </span>
      <span>Redux</span>
      <span>Task Management  </span>
      <span>Dyanamo DB</span>
    </div>
    </div>
  </div>
  
  
  <div className="card-container" >
    <div className="card" onClick={() => window.open("https://www.sky.com/broadband", "_blank")}>
    <h3>Sky (United Kingdom)</h3>
    <div className="skill-list">
      <span>Integrating Concourse</span>
      <span>Teamcity</span>
      <span>Octopus</span>
      <span>Redux</span>
    </div>
    </div>

    <div className="card" onClick={() => window.open("https://www.smarttoni.com/", "_blank")}>
    <h3>SmartTONi (India)</h3>
    <div className="skill-list">
      <span>Wifi Data transfer</span>
      <span>Room DB</span>
      <span>Content Stack</span>
      <span>CMS</span>

    </div>
    </div>
  </div>
  <div className="card-container">
    <div className="card" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.jiwok.runnercoach&utm_source=apac_med", "_blank")}>
    <h3>Jiwok Coach (India)</h3>
    <div className="skill-list">
      <span>Sports coach</span>
      <span>Pdf handler</span>
      <span>Spotify</span>
    </div>
    </div>
    
    <div className="card" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.steelmanpro.wifivideoscope&utm_source=apac_med", "_blank")}>
    <h3>Steelman Pro (India)</h3>
    <div className="skill-list">
      <span>Video Scope tool</span>
      <span>Live streaming</span>
      <span>Snapshots</span>
    </div>
    </div>
  </div>
</div>
  
     )}
     {page === "contact" && (
    <>
     <div className="contact-container1"></div>
</>
)}
    </div>
 

  {/* Right Side: Content */}
  <div className="right-section">
    {page === "home" && (
      <>
        <h1 className="text-animate">DENIL JOHN</h1>
        <h2 className="text-animate">Software Developer</h2>
        <p className="text-animate">
        With 7+ years of experience in mobile and web development, I specialize in building high-performance React Native and native  (Javascript, Java, Kotlin, swift) applications, along with dynamic and scalable React web apps (TypeScript, Javascript). Passionate about creating seamless cross-platform experiences, I focus on delivering intuitive UI/UX, optimized performance, and innovative solutions. From enterprise systems to consumer apps, I bring technical expertise and problem-solving skills to every project..
        </p>
      </>
    )}
    
    {page === "skills" && (
  <>
  <div className="icon-rain-container2">
      {skillIcons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt="Skill Icon"
          className="rain-icon"
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDelay: `${Math.random() * 3}s`, // Random delay
            animationDuration: `${3 + Math.random() * 2}s` // Random speed
          }}
        />
      ))}
      
      <div className="skills-container">
        <div className="skill-card">
        <h3>Issue Tracking & Testing</h3>
        <div className="skill-list">
          <span>Jira & Confluence</span>
          <span>Firebase</span>
          <span> Jest</span>
          <span> Postman</span>


        </div>
        </div>

      </div>
      <div className="skills-container">
      <div className="skill-card">
        <h3>CI/CD tools</h3>
        <div className="skill-list">
        <span>Teamcity</span>
          <span>Concourse</span>
          <span>Octopus</span>
          <span>GitLab</span>
          <span>BitBucket</span>
        </div>
        </div>

        
        <div className="skill-card">
        <h3>Data Handling</h3>
        <div className="skill-list">
          <span>GraphQL</span>
          <span>MobX</span>
          <span>Apollo Client</span>
          <span>Redux</span>
        </div>
        </div>

        
      </div>
      

      
    </div>
    
  </>
)}

    {page === "experience" && (
      <>
         <div className="experience-container">
    <h1 className="text-animate">Experience</h1>
    <h2 className="text-animate"><strong>Senior Software Developer</strong> - Freight Cyber (2024 - Present, Australia)</h2>
    <h className="text-animate">
     Developedcorecomponents for Mobile apps and assignment using React Native, TypeScript, Redux,
 Java and custom component library and with expo
  Implementedthird party libraries and Interaction with different Node and Node APIs
  Workedinfast-paced environment.
  WorkedwithContentStack for CMS management.
  Awsorienteddevelopment using DynamoDb for offline
  EnabledCI/CDfor micro-services using tools like JUnit, Git, following TDD practices
  Implementedappsusing Class,Hooks and worked in TypeScript.
  Firebase implementation for push notification, tracking and crashlytics
  Project management andcordination of the team.
    </h>
    <h2  className="text-animate"><strong>Software Developer</strong> - Zensar Technologies (2022 - 2023, England)</h2 >
    <h className="text-animate">
    Createdmultiple React based reusable components following various design practices
, Developedafunctionality to store user preferences in broadband checkout journey improving user
 experience
, Improvederror handling in code for overall broadband journey
, UsedJestastesting framework
, Involved in deployment of new release on production environment with senior developers in
 TeamCity/Concourse and reviewed pull requests of peer associates
, Involved in Graphql Management    </h>
    <h2  className="text-animate"><strong>Software Developer</strong> - Pit Solutions(2018 - 2021, India)</h2 >
    <h className="text-animate">
    Developedcorecomponents for Mobile apps and assignment using React Native, TypeScript, Redux,
 Java and custom component library.
 , DevelopedmoreUIbasedmobile application.
 , Implementedthird party libraries and Interaction with different Node and Node APIs
 , Workedinfast-paced environment.
 , WorkedwithContentStack for CMS management.
 , UsedJestastesting framework
 , ModularandIntutive Architecture development for mobile apps.
 , EnabledCI/CDfor micro-services using tools like JUnit, Git, following TDD practices
 , Implementedappsusing Class,Hooks and worked in TypeScript.
 , Project management andcordination of the team    </h>
    <h2  className="text-animate"><strong>Software Engineer</strong> - Reubro International (2017 - 2018, India)</h2 >
    <h className="text-animate">
    DevelopedAndroidMobileapplicationusingJavaandXML
 Deploymentoftheapplicationstoplaystoreandmaintains.
 Leadandcoordinatetheteam
  InteractionwithInternationalClients.    </h>
    
  </div>
      </>
    )}

    {page === "contact" && (
      <div>
      <ContactForm/>
      </div>
    )}
  </div>

  {/* Floating Action Buttons */}
  <div className="fab-container">
    <button className="fab" onClick={() => setPage("home")} title="Home">
      <FaUser />
    </button>
    <button className="fab" onClick={() => setPage("skills")} title="Skills">
      <FaCode />
    </button>
    <button className="fab" onClick={() => setPage("experience")} title="Experience">
      <FaBriefcase />
    </button>
    <button className="fab" onClick={() => setPage("contact")} title="Contact">
      <FaEnvelope />
    </button>
    <a href={resumeUrl} download="Denil_john_Resume.pdf" className="fab" title="Download Resume">
      <FaDownload />
    </a>
  </div>
</div>
  );
}

export default App;
