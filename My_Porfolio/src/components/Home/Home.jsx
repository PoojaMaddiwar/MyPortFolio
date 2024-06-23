import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImage from "../../assets/hero/heroImage.png";
import "./home.css";
const Home = ()=>{

    const ref1 = useRef(null);

    useEffect(() => {
        const typed = new Typed(ref1.current, {
          strings: ["FrondEnd Developer"],
          startDelay: 100,
          typeSpeed: 70,
          backSpeed: 100,
          loop: true
        });
    
       return () => {
          typed.destroy();
        };
      }, []);


    return(
        <>
            <div className="hcontainer">
                <div className="hcontent">
                    <h2 className="title">Hi, I'm Pooja</h2>
                    <h2 className="title">And I'm <span  ref={ref1}></span></h2>
                    <p className="description">
                        
Seeking a challenging role as a Web Developer to leverage my web technology skills and contribute to innovative projects. Committed to continuous learning and making a significant impact in a dynamic environment.
                    </p>
                    <div className="icon-container text-white">
                        <a href="" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}>
                            <i className="icon fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/pooja-maddiwar/" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}>
                            <i className="icon fa-brands fa-linkedin"></i>
                        </a>
                        <a href="" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}>
                            <i className="icon fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://github.com/PoojaMaddiwar" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}>
                            <i className="icon fa-brands fa-github"></i>
                        </a>
                    </div>
                    <a href="/Contact" className="contactBtn">Contact Me</a>
                </div>

                <img 
                className="heroImg" 
                src={bannerImage} 
                alt="Hero image of me" />

                <div className="topBlur" />
                

            </div>

            
        </>
    )
}

export default Home;