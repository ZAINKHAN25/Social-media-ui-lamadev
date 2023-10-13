import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


import './profile.css'

export default function Profile() {
    const loginperson = JSON.parse(localStorage.getItem("loginperson"));
    const navigate = useNavigate();

    useEffect(() => {
        if (loginperson === null) {
            navigate('/login');
        }
    }, [loginperson]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="profilecoverimg" />
                            <img src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg" alt="" className="profileuserimage" />
                        </div>
                        <div className="profileinfo">
                            <h4 className="profileinfoname">Ismail</h4>
                            <span className="profileinfodesc">Hello i am Ismail ali shah class topper who is currently working in the Zain's office who was my school classmate and i don't take it serious but now he is my boss and i can't do anything Thank's</span>
                        </div>
                    </div>
                    <div className="profilerightbottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}