export default function Online({user}) {
    return (
        <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
                <img className='rightbarprofileimg' src={user.profilePicture}alt="" />
                <div className="rightbaronline"></div>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}