import './post.css'
import { Users } from '../../dummyData.js'
import { useState } from 'react'


export default function Post({ post }) {
    const [like, setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false)

    function likeHandeler(){
        setlike(isliked ? like -1: like + 1 )
        setisliked(!isliked)
    }

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postusername">{Users.filter(u => u.id === post.userId)[0].username}</span>
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