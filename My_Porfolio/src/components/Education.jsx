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
            <div className="card_detail">
                <div className="education col-md-6">
                    <div className="card w-50 mt-3">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fa fa-calendar-day"></i>Card title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
   
                        </div>
                    </div>
                    
                </div>

                <div className="experience col-md-6">
                    <div className="card w-50">
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