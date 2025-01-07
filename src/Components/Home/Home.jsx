import React from 'react';
import { Link } from 'react-router-dom';
import Homelogo from "../../assets/homelogo/hlogo.jpg";
import About from '../About/About';
import Hstyle from "../Home/Home.module.css";

const Home = () => {
    return (
        <div>
            <div>
                <div className={Hstyle.img}>
                    <img src={Homelogo} alt="Logo" />
                </div>
                <div className={Hstyle.nav}>
                    <div className={Hstyle.title}>
                        <i className="fa fa-home" aria-hidden="true"><b style={{ marginLeft: "10px" }}>Realestate</b></i>
                    </div>
                    <div className={Hstyle.navlink}>
                        <Link to="/items/home">Home</Link>
                        <Link to="/items/properties">Properties</Link>
                        <Link to="/items/add">Add</Link>

                    </div>
                    <div className={Hstyle.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true"><b style={{ marginLeft: "10px" }}>SignUp</b></i>
                    </div>
                </div>
                <div className={Hstyle.htext}>
                    <span><h1>Searching for the home of your dreams 24/7</h1></span>
                </div>

            </div>
            <About />
        </div>
    );
}

export default Home;