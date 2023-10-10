import './post.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Post({ post }) {
    const [like, setlike] = useState(post.likes.length)
    const [isliked, setisliked] = useState(false)
    const [user, setUser] = useState({})

    function likeHandeler(){
        setlike(isliked ? like -1: like + 1 )
        setisliked(!isliked)
    }

    useEffect(()=>{
        async function fetchuser(){
            console.log(post.userId);
            const res = await axios.get(`http://localhost:8080/user/v1/${post.userId}`)
            console.log(res);
            setUser(res.data);
        }
        fetchuser()
    },[])

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src={user.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" />
                        <span className="postusername">{user.username}</span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttxt">
                        {post?.desc}
                    </span>
                    <img src={post?.photo} className='postimg' alt="" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <i className="fa-solid fa-thumbs-up likeicon" onClick={likeHandeler}></i>
                        <i className="fa-solid fa-heart hearticon" onClick={likeHandeler}></i>
                        <span className="postlikecounter">{like} people likes it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}