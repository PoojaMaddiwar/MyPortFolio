import abouImg from "../../assets/about/aboutImage.png"
import "./about.css"
const About = ()=>{
    return(
        <>
        <section className="abtcontainer">
            <h2 className="abttitle">About</h2>

            <div className="abtcontent">
                <img src={abouImg} 
                alt="Me sitting with laptop"
                className="aboutImage" />

                <ul className="aboutItem">
                    <li className="aboutItem">
                        <img src="" alt="" />
                        <div className="aboutItemText">
                            <h3>Frontend Developer</h3>
                            <p></p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="" alt="" />
                        <div className="aboutItemText">
                            <h3></h3>
                            <p></p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="" alt="" />
                        <div className="aboutItemText">
                            <h3></h3>
                            <p></p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
        </>
    )
}

export default About;