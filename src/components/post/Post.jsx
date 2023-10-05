import './post.css'

export default function Post(){
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                    </div>
                </div>
                <div className="postcenter"></div>
                <div className="postbottom"></div>
            </div>
        </div>
    )
}