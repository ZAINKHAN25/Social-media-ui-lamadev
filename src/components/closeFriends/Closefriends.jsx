import { useNavigate } from "react-router-dom";

export default function Closefriends({ user }) {
    const Navig = useNavigate()
    return (
        <li onClick={() => {
            Navig(`/profile/${user.username}`)
        }} className="sidebarfriend">
            <img src={user.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" className="sidebarfrndimg" />
            <span className='sidebarfrndname'>{user.username}</span>
        </li>
    )
}