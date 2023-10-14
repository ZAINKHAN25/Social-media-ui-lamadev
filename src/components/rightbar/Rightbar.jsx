import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './rightbar.css';
import { Users } from '../../dummyData.js';
import Online from '../online/Online.jsx';

export default function Rightbar({ followings, profile }) {
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
        return (
            <>
                <div className="birdthdaycontainer">
                    {/* ... (your Homerightbar component content) */}
                </div>
            </>
        );
    }

    function Profilerightbar() {
        return (
            <>
                <h4 className='rightbartitle'>User Information</h4>
                <div className="rightbarinfo">
                    {/* ... (your Profilerightbar component content) */}
                </div>
                <h4 className='rightbartitle'>User Friends</h4>
                <div className="rightbarfollowings">
                    {userDataArray.map((userData, i) => (
                        userData ? (
                            <div key={i} className="rightbarfollowing">
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
