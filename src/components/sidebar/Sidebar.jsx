import { useEffect, useState } from 'react';
import Closefriends from '../closeFriends/Closefriends'
import './sidebar.css';
// import {Users} from '../../dummyData.js'

export default function Sidebar() {
    let [users, setusers] = useState([])
    useEffect(()=>{
        async function getdata(){
            try {
                const user = await fetch('https://Social-media-app-with-mongo-db.vercel.app/user/v1/');
                const realdata = await user.json();
                setusers(realdata)
            } catch (error) {
                console.log(error);
            }

        }
        getdata()
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-rss"></i>
                        <span className="sidebarlistitemtext">Feed</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-comment"></i>
                        <span className="sidebarlistitemtext">Chats</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-circle-play"></i>
                        <span className="sidebarlistitemtext">Videos</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-user-group"></i>
                        <span className="sidebarlistitemtext">Gropus</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-bookmark"></i>
                        <span className="sidebarlistitemtext">Bookmarks</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-circle-question"></i>
                        <span className="sidebarlistitemtext">Questions</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-rectangle-list"></i>
                        <span className="sidebarlistitemtext">Jobs</span>
                    </li>
                    <li className="sidebarlistitem">
                        <i className="fa-solid sidebaricon fa-graduation-cap"></i>
                        <span className="sidebarlistitemtext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarbutton">Show More</button>
                <hr className='sidebarhr' />
                <ul className="sidebarfriendlist">
                    {users.map((u, i) => (
                        <Closefriends key={i} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}