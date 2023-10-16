export default function Closefriends({user}) {
    return (
        <li className="sidebarfriend">
            <img src={user.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" className="sidebarfrndimg" />
            <span className='sidebarfrndname'>{user.username}</span>
        </li>
    )
}