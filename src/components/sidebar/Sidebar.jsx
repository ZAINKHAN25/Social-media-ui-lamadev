import { useEffect, useState } from 'react';
import Closefriends from '../closeFriends/Closefriends';
import './sidebar.css';

export default function Sidebar() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://Social-media-app-with-mongo-db.vercel.app/user/v1/');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    setError('Failed to fetch data');
                }
            } catch (error) {
                setError('An error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                    {users.map((user) => (
                        <Closefriends key={user.id} user={user} />
                    ))}
                </ul>

            </div>
        </div>
    );
}
