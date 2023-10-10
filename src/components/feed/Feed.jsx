import { useEffect, useState } from 'react';
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';

import axios from 'axios'

export default function Feed(){
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        async function getdata(){
            const res = await axios.get('https://social-media-app-with-mongo-db.vercel.app/posts/v1/')
            setposts(res.data);
            console.log(res.data);
        }
        getdata()
    },[])

    return (
        <div className='feed'>
            <div className="feedwrapper">
                <Share />
                {posts.map((p,i) =>(
                    <Post key={i} post={p}/>
                ))}
            </div>
        </div>
    )
}