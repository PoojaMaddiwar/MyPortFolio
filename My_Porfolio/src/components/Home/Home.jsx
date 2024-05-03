import React from "react";
import  bannerImage  from "../../assets/hero/heroImage.png"
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
import "./home.css";
const Home = ()=>{

    // const ref1 = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(ref1.current, {
    //       strings: ["FrondEnd Developer"],
    //       startDelay: 100,
    //       typeSpeed: 70,
    //       backSpeed: 100,
    //       loop: true
    //     });
    
    //    return () => {
    //       typed.destroy();
    //     };
    //   }, []);


    return(
        <>
            {/* <div className="bg-containerr d-flex justify-content-around">
                <div className="myinfoContaier">
               <div className="my-info">
                    <h3 className="text-white text-shodow">Hi, I am</h3>
                    <h1 className="text-light text-shodow">Pooja</h1>
                    <h2 className="heading text-shodow">And I am <b><span  ref={ref1}></span></b></h2>
                    <p className="paragrap">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat excepturi qui magni possimus illo non eos ipsam 
                        quasi iusto numquam. Quod quaerat harum, natus repellendus, 
                        obcaecati non cumque doloribus, quisquam expedita tempore neque?
                        Similique sapiente quam saepe alias temporibus facilis aliquid dolor, 
                        vel obcaecati.Rerum tempore a recusandae impedit nam!
                    </p>
                    <div className="icon-container text-white">
                    <i className="icon fa-brands fa-facebook mx-3"></i>
                    <i className="icon fa-brands fa-linkedin mx-3"></i>
                    <i className="icon fa-brands fa-instagram mx-3"></i>
                    </div>
                    <a href="/Contact">Contact Me</a>

               </div>
               </div>
               <div className="my-img col-md-6">
          
                   <img className="img-fluid rounded-circle" src={bannerImage} alt="" />
               
               </div>
            </div> */}

            <section className="container">
                <div className="content">
                    <h1 className="title">Hi, I'm Pooja</h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Deleniti cumque molestiae atque recusandae obcaecati 
                        quas placeat odit odio consequuntur ex!
                    </p>
                    <div className="icon-container text-white">
                        <i className="icon fa-brands fa-facebook mx-3"></i>
                        <i className="icon fa-brands fa-linkedin mx-3"></i>
                        <i className="icon fa-brands fa-instagram mx-3"></i>
                    </div>
                    <a href="/Contact" className="contactbtn">Contact Me</a>
                </div>

                <img 
                className="heroImg" 
                src={bannerImage} 
                alt="Hero image of me" />

                <div className="topBlur" />
                <div className="bottomBlur" />

            </section>

            
        </>
    )
}

export default Home;