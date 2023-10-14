import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";

import './profile.css';

export default function Profile() {
    const loginperson = JSON.parse(localStorage.getItem("loginperson"));
    const navigate = useNavigate();

    let [user, setuser] = useState('');
    let [followorunfollowtxt, setfolloworunfollowtxt] = useState('');
    let [followistrue, setfollowistrue] = useState(true)

    const id = useParams().id;

    useEffect(() => {
        if (loginperson === null) {
            navigate('/login');
        }

        async function fetchuser() {
            try {
                const res = await axios.get(`https://social-media-app-with-mongo-db.vercel.app/user/v1/${id}`);
                const userData = res.data;
                setuser(userData);

                if (userData.followers && userData.followers.includes(loginperson)) {
                    setfolloworunfollowtxt("Unfollow");
                } else {
                    setfolloworunfollowtxt("Follow");
                }

                // Set followistrue based on the condition
                setfollowistrue(loginperson !== userData._id);
            } catch (error) {
                if (error) {
                    navigate('/*');
                }
            }
        }

        fetchuser();
    }, [loginperson, id]);

    async function followunfollowfoo() {
        try {
            if (followorunfollowtxt === "Follow") {
                await axios.put(`https://social-media-app-with-mongo-db.vercel.app/user/v1/${user._id}/follower`, {
                    userId: loginperson
                }).then(response => {
                    // Update the state and console log the response
                    setfolloworunfollowtxt("Unfollow");
                    console.log(response);
                });
            } else if (followorunfollowtxt === "Unfollow") {
                await axios.put(`https://social-media-app-with-mongo-db.vercel.app/user/v1/${user._id}/unfollow`, {
                    userId: loginperson
                }).then(response => {
                    // Update the state and console log the response
                    setfolloworunfollowtxt("Follow");
                    console.log(response);
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img src={user.profilecoverimg || "https://i.pinimg.com/736x/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"} alt="" className="profilecoverimg" />
                            <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" className="profileuserimage" />
                        </div>
                        <div className="profileinfoandfollowbtn">
                            <div className="profileinfo">
                                <h4 className="profileinfoname">{user.username || "User name"} </h4>
                                <span className="profileinfodesc">{user.description || "User description"}</span>
                            </div>
                            {followistrue && (<button onClick={followunfollowfoo} className="followorunfllowbtn">{followorunfollowtxt}</button>)}
                        </div>
                    </div>
                    <div className="profilerightbottom">
                        <Feed />
                        <Rightbar followings={user.followings} profile />
                    </div>
                </div>
            </div>
        </>
    )
}
