import bannerImage from "../assets/ai_cartoon.webp";
import Typed from "typed.js";
import { useEffect,useRef } from "react";
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
                    <h3>Hi, I am</h3>
                    <h1>Pooja Maddiwar</h1>
                    <h2>And I am <b><span  ref={ref1}></span></b></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat excepturi qui magni possimus illo non eos ipsam 
                        quasi iusto numquam. Quod quaerat harum, natus repellendus, 
                        obcaecati non cumque doloribus, quisquam expedita tempore neque?
                        Similique sapiente quam saepe alias temporibus facilis aliquid dolor, 
                        vel obcaecati.Rerum tempore a recusandae impedit nam!
                    </p>
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