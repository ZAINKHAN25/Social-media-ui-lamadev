import { useEffect, useState } from 'react';
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';

import axios from 'axios'

export default function Feed(){
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        async function getdata(){
            const res = await axios.get('http://localhost:8080/posts/v1/timeline/64ef8a6cd458a56a1dc8cb6b')
            setposts(res.data);
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