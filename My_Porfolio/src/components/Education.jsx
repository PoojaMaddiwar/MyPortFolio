import axios from "axios";
import { useEffect, useState } from "react";

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
        <div className="bg-containerr">
            <div className="card w-25 col-md-6">
                <div className="card-body">
                    <h5 className="card-title"><i className="fa fa-calendar-day"></i>Card title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
                </div>
            </div>
        </div>
        </>
    )
}

export default Education;