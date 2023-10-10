import './post.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Post({ post }) {
    const [like, setlike] = useState(post.likes.length)
    const [isliked, setisliked] = useState(false)
    const [user, setUser] = useState({})

    async function likeHandler() {
        try {
            console.log(post._id);
          const response = await axios.put(`https://social-media-app-with-mongo-db.vercel.app/posts/v1/${post._id}/like`, {
            userId: '64ef8a6cd458a56a1dc8cb6b', // Replace with the actual user ID
          });
      
          // Check the response to determine whether the post was liked or disliked
          if (response.data === "The post has been liked") {
            setlike(like + 1); // Increment the like count
            setisliked(true); // Set isliked to true
          } else if (response.data === "The post has been disliked") {
            setlike(like - 1); // Decrement the like count
            setisliked(false); // Set isliked to false
          }
        } catch (error) {
          console.error(error);
        }
      }
      

    useEffect(() => {
        async function fetchuser() {
            const res = await axios.get(`https://social-media-app-with-mongo-db.vercel.app/user/v1/${post.userId
                }`).then(res => setUser(res.data))
                .catch(err => console.error(err))
            
        }
        fetchuser()
    }, [])

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src={user?.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" />
                        <span className="postusername">{user?.username}</span>
                        <span className="postdate">{post?.date}</span>
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