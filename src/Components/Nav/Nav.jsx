import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Properties from "../Properties/Properties";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register"
import Add from "../Properties/Add/Add";
const Nav = () => {


    return (
        <>
            <Router>

                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route element={<Home />} />
                    <Route path="items" >
                        <Route path="home" element={<Home />} />
                        <Route path="properties" element={<Properties/>} />
                        <Route path="add" element={<Add/>} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />


                    </Route>
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    );
}

export default Nav;