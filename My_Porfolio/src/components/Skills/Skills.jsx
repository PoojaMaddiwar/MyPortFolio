import { useEffect, useState } from "react";
import cssImage from '../../assets/skills/css.png';
import bootStrap from '../../assets/skills/bootstrap.png'
import htmlImage from '../../assets/skills/html.png';
import mongodbImage from '../../assets/skills/mongodb.png';
import nodeImage from '../../assets/skills/node.png';
import reactImage from '../../assets/skills/react.png';
import springBoot from '../../assets/skills/springboot.png';
import javascript from '../../assets/skills/javascript.png';
import mysql from '../../assets/skills/mysql.png';
import expImg from '../../assets/skills/exp.jpg'
// import servicenet from '../../assets/skills/servicenet.jpg';
// import ExcelR from '../../assets/skills/excelRlogo';
import "./skills.css";
import axios from "axios";

const Skills = () => {

  const [exp,setExp] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/xyz").then((posRes)=>{
      const {data} = posRes;
      setExp(data);
      console.log(data);

    },(eorRes)=>{
      console.log(eorRes);
    })

  },[])


  const [skills, setSkills] = useState([
    {
      title: "React",
      imageSrc: reactImage
    },
    {
      title: "Javascript",
      imageSrc: javascript
    },
    {
      title: "BootStrap",
      imageSrc: bootStrap
    },
    
    
    {
      title: "HTML",
      imageSrc: htmlImage
    },
    {
      title: "CSS",
      imageSrc: cssImage
    },
    {
      title: "Spring Boot",
      imageSrc: springBoot
    },
    {
      title: "Node",
      imageSrc: nodeImage
    },
   
    {
      title: "MongoDB",
      imageSrc: mongodbImage
    },
    {
      title: "MySQL",
      imageSrc: mysql
    }
  ]);

  return (
    <div className="skills-container">
      <div className="skill_c">
      <h2 className="title">TECHNICAL SKILLS</h2>
      <div className="content">
          <div className="skills">
        {
            skills.map((skill, index) => {
                return(
                      <div key={index} className="skill">
                          <div className="skillImageContainer">
                              <img src={skill.imageSrc} alt={skill.title} />
                          </div>
                              <p className="skill-title">{skill.title}</p>
                      </div>
                       )
           }
        
           )}
          </div>
      </div>
    </div>
           {/* experience */}

           <div className="expContainer">
           <h2 className="title">Experience</h2>
              <div className="exp">
                {
                 exp.slice().reverse().map((element,index)=>{
                    return(
                      <div key={index} class="card">
                        <img src={element.c_logo || expImg} alt={element.company_name} className="experience-logo" />
                      <div class="detailsContainer">
                          <h4><b>{element.company_name}</b></h4> 
                          <p>{element.Role}</p> 
                          <p>{element.year}</p>
                      </div>
                      </div>
                    )
                 })
                }
              </div>


           </div>

           <div className="project"><br /></div>
    
    </div>
  );
}

export default Skills;
