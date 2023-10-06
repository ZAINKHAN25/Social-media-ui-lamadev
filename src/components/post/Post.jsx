import './post.css'
import {Users} from '../../dummyData.js'


export default function Post({post}) {
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
                        <i className="fa-solid fa-thumbs-up likeicon"></i>
                        <i className="fa-solid fa-heart hearticon"></i>
                        <span className="postlikecounter">{post.like} people likes it</span>
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