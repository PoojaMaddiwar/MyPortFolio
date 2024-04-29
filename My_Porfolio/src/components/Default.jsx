import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
const DefaultComp = ()=>{
    const [clicked,setClicked] = useState(null);
    const handelClick = (link)=>{
        setClicked(link);
    }
    return(
        <>
       {/*  */}
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-white">Pooja Maddiwar</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MyPorfolio">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* header menu */}

                <div id="MyPorfolio" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${clicked === "/" ? "active" : ""}`}>
                                <Link to={"/"} className="link">
                                    <button className="nav-link" onClick={()=> handelClick("/")}>Home</button>
                                </Link>
                            </li>

                            <li className={`nav-item ${clicked === "/About" ? "active" : ""}`}>
                                <Link to={"/About"} className="link">
                                    <button className="nav-link" onClick={()=> handelClick("/About")}>About</button>
                                </Link>
                            </li>

                            <li className={`nav-item ${clicked === "/Education" ? "active" : ""}`}>
                                <Link to={"/Education"} className="link">
                                    <button className="nav-link" onClick={()=> handelClick("/Education")}>Education</button>
                                </Link>
                            </li>

                            <li className={`nav-item ${clicked === "/Skills" ? "active" : ""}`}>
                                <Link to={"/Skills"} className="link">
                                    <button className="nav-link" onClick={()=> handelClick("/Skills")}>Skills</button>
                                </Link>
                            </li>

                            <li className={`nav-item ${clicked === "/Contact" ? "active" : ""}`}>
                                <Link to={"/Contact"} className="link">
                                    <button className="nav-link" onClick={()=> handelClick("/Contact")}>Contact</button>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
           
        <Outlet></Outlet>
        </>
    )
}

export default DefaultComp;