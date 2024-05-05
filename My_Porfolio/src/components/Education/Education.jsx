import axios from "axios";
import { useEffect, useState } from "react";
import "./education.css"

const Education = ()=>{
    const [details,setdetails] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/education").then((posRes)=>{
            const {data} = posRes;
            setdetails(data);
            console.log(data)

        },(eroRes)=>{
            console.log(eroRes)
        })
    },[])
    return(
       <>
        <div className="educontainerr">
            
            <div className="card_detail">
                <div className="education">
                    <h1 className="text-white">Education</h1>
                    {/* education details */}
                    {
                        details.map((element,index)=>{
                            return(
                               
                                <div key={index} className="card mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fa fa-calendar-day"></i>{"  "+element.year}</h5>
                                        <p className="card-text">{element.clagName}</p>
                                        <h6 className="card-text">{element.univercity}</h6>
   
                                    </div>
                                </div>
                            )

                        })
                    }
                    
                    
                </div>

                <div className="experience">
                    <h1>Experience</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fa fa-calendar-day"></i>Card title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education;