import bannerImage from "../assets/ai_cartoon.webp";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
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
            <div className="bg-containerr d-flex justify-content-around">
                <div className="myinfoContaier">
               <div className="my-info">
                    <h3 className="text-white text-shodow">Hi, I am</h3>
                    <h1 className="text-light text-shodow">Pooja Maddiwar</h1>
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
            </div>

            
        </>
    )
}

export default Home;