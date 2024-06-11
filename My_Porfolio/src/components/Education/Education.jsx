import axios from "axios";
import { useEffect, useState } from "react";
import eduImage from "../../assets/education/aicartoon.png";
import "./education.css";

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
            <div className="eduContainer">
            <img className="eduImg"
                src={eduImage} 
                alt="my cool image" />
                <div className="Mydetails">
                    <div className="ExpDetails">
                <h2 className="edutitle">Education</h2>
                    {
                       details.slice().reverse().map((element,index)=>{
                        return(
                           <ul key={index} className="eduItems">
                            <li className="eduItem">
                                <div className="eduItemText">
                                <h5><i className="fa fa-calendar-day"></i>{"  "+element.year}</h5>
                                <p>{element.clagName}</p>
                                <h6>{element.univercity}</h6>
                                </div>
                            </li>
                           </ul>
                        )

                    })
                    }
                    </div>
                   </div>

               
            </div>
        </>
       
    )
}

export default Education;