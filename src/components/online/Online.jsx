export default function Online({user}) {
    return (
        <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
                <img className='rightbarprofileimg' src={user.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" />
                <div className="rightbaronline"></div>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}