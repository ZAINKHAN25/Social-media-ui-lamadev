import './post.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function Post({ post }) {
    const [like, setlike] = useState(post.likes.length)
    const [isliked, setisliked] = useState(false)
    const [user, setUser] = useState({})

    async function likeHandler() {
        const loginperson = JSON.parse(localStorage.getItem("loginperson"));
        try {
          const response = await axios.put(`https://social-media-app-with-mongo-db.vercel.app/posts/v1/${post._id}/like`, {
            userId: loginperson,
          });
    
          if (response.data === "The post has been liked") {
            setlike(like + 1); 
            setisliked(true); 
          } else if (response.data === "The post has been disliked") {
            setlike(like - 1); 
            setisliked(false); 
          }
        } catch (error) {
          console.error(error);
        }
      }
      

    useEffect(() => {
        async function fetchuser() {
            const res = await axios.get(`https://social-media-app-with-mongo-db.vercel.app/user/v1/${post.userId}`).then(res => setUser(res.data))
                .catch(err => console.error(err))
            
        }
        fetchuser()
    }, [])

    const Navig = useNavigate()

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft" onClick={()=>{
                         Navig(`/profile/${user.username}`)
                    }}>
                        <img className='postprofileimg' src={user?.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" />
                        <span className="postusername">{user?.username}</span>
                        <span className="postdate">{post?.createdAt}</span>
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
                        <i className="fa-solid fa-thumbs-up likeicon" onClick={likeHandler}></i>
                        <i className="fa-solid fa-heart hearticon" onClick={likeHandler}></i>
                        <span className="postlikecounter">{like} people likes it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">
                            {post.comment || 0} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}