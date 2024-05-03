import React from "react";
import  bannerImage  from "../../assets/hero/heroImage.png"
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
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
            <section className="container">
                <div className="content">
                    <h2 className="title">Hi, I'm Pooja</h2>
                    <h2 className="title">And I'm <span  ref={ref1}></span></h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Deleniti cumque molestiae atque recusandae obcaecati 
                        quas placeat odit odio consequuntur ex!
                    </p>
                    <div className="icon-container text-white">
                        <i className="icon fa-brands fa-facebook"></i>
                        <i className="icon fa-brands fa-linkedin"></i>
                        <i className="icon fa-brands fa-instagram"></i>
                    </div>
                    <a href="/Contact" className="contactBtn">Contact Me</a>
                </div>

                <img 
                className="heroImg" 
                src={bannerImage} 
                alt="Hero image of me" />

                <div className="topBlur" />
                

            </section>

            
        </>
    )
}

export default Home;