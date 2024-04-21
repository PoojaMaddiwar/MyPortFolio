import "./style.css";
const DefaultComp = ()=>{
    return(
        <>
       
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-white">PortFolio</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MyPorfolio">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* header menu */}

                <div id="MyPorfolio" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link">Home </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link">About</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link">Education</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link">Skills</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link">Contact</button>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default DefaultComp;