import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './rightbar.css';
// import { Users } from '../../dummyData.js';
import Online from '../online/Online.jsx';
import { useNavigate } from 'react-router-dom';

export default function Rightbar({ followings, profile, userinfoprop }) {
    const [userDataArray, setUserDataArray] = useState([]);

    useEffect(() => {
        if (followings) {
            const fetchUserDetails = async () => {
                const promises = followings.map(async (following) => {
                    try {
                        const response = await axios.get(`https://social-media-app-with-mongo-db.vercel.app/user/v1/${following}`);
                        return response.data;
                    } catch (error) {
                        console.error(`Error fetching user data for ${following}:`, error);
                        return null;
                    }
                });

                const userArray = await Promise.all(promises);
                setUserDataArray(userArray);
            };

            fetchUserDetails();
        }
    }, [followings]);

    function Homerightbar() {
        let [users, setusers] = useState([])
        useEffect(() => {
            async function getdata() {
                try {
                    const user = await fetch('https://Social-media-app-with-mongo-db.vercel.app/user/v1/');
                    const realdata = await user.json();
                    setusers(realdata)
                } catch (error) {
                    console.log(error);
                }

            }
            getdata()
        }, [])
        return (
            <>
                <div className="birdthdaycontainer">
                    <img className='birthdayimg' src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBnaWZ0fGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                    <span className="birthdaytext">
                        <b>Zain</b> and <b>3 other frinds</b> have birthday today
                    </span>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/013/057/701/small/ad-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg" className='rightbarad' alt="" />
                <h4 className="rightbartitle">Online Friends</h4>
                <ul className="rightbarfriendlist">
                    {users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}

                </ul>
            </>
        );
    }

    function Profilerightbar() {
        const Navig = useNavigate()
        return (
            <>
                <h4 className='rightbartitle'>User Information</h4>
                <div className="rightbarinfo">
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">City: </span>
                        <span className="rightbarinfovalue">{userinfoprop?.cityname || "Karachi"}</span>
                    </div>
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">From:</span>
                        <span className="rightbarinfovalue">{userinfoprop?.countryname || "Pakistan"}</span>
                    </div>
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">Relationship:</span>
                        <span className="rightbarinfovalue">Single</span>
                    </div>
                </div>
                <h4 className='rightbartitle'>User Friends</h4>
                <div className="rightbarfollowings">
                    {userDataArray.map((userData, i) => (
                        userData ? (
                            <div onClick={()=>{
                                Navig(`/profile/${userData.username}`)
                            }} key={i} className="rightbarfollowing">
                                <img src={userData.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" className="rightbarfollowingimg" />
                                <div className="rightbarfollowingname">
                                    {userData.username}
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </>
        );
    }

    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                {profile ? <Profilerightbar /> : <Homerightbar />}
            </div>
        </div>
    );
}
