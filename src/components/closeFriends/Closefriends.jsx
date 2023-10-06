export default function Closefriends({user}) {
    return (
        <li className="sidebarfriend">
            <img src={user.profilePicture} alt="" className="sidebarfrndimg" />
            <span className='sidebarfrndname'>{user.username}</span>
        </li>
    )
}