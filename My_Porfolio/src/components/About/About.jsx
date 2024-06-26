import React from "react";
import abouImg from "../../assets/about/aboutImage.png";
import CursorIcon from "../../assets/about/cursorIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";
import serverIcon from '../../assets/about/serverIcon.png';
import "./about.css";
const About = ()=>{
    return(
        <>
        <div className="container">
        <section className="abtcontainer">
            <h2 className="abttitle">About</h2>

            <div className="abtcontent">
                <img src={abouImg} 
                alt="Me sitting with laptop"
                className="aboutImage" />

                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={CursorIcon} alt="" />
                        <div className="aboutItemText">
                            <h3>Frontend Developer</h3>
                            <p> I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={uiIcon} alt="" />
                        <div className="aboutItemText">
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={serverIcon} alt="" />
                        <div className="aboutItemText">
                            <h3>Backend Developer</h3>
                            <p>Currently learning and developing skills as a Backend Developer to build efficient and scalable server-side applications.</p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
        </div>
        </>
    )
}

export default About;