import React, { useEffect } from 'react'; // Import useEffect
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from "react-router-dom";

import './home.css';

export default function Home() {
    const loginperson = JSON.parse(localStorage.getItem("loginperson"));
    const navigate = useNavigate();

    useEffect(() => {
        if (loginperson === null) {
            navigate('/login');
        }
        else if(loginperson === ""){
            navigate('/login');
        }
    }, [loginperson]); 

    return (
        <>
            <div>
                <Topbar />
                <div className="homecontainer">
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </div>
            </div>
        </>
    );
}
