import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                        <span className="postusername">Talha</span>
                        <span className="postdate">5 min ago</span>
                    </div>
                    <div className="posttopright">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttxt">
                        Hey it's my first post:)
                    </span>
                    <img src="https://www.anpost.com/getmedia/b07fc9ab-2b35-4d25-a1ee-331d8118e59d/E00163308-BookTok-social-M06-Mobile.jpg?width=570&height=355&ext=.jpg" className='postimg' alt="" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <i className="fa-solid fa-thumbs-up likeicon"></i>
                        <i className="fa-solid fa-heart hearticon"></i>
                        <span className="postlikecounter">32 people likes it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">
                            9 comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}