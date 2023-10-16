import { useNavigate } from "react-router-dom";
export default function Online({user}) {
    const Navig = useNavigate()
    return (
        <li className="rightbarfriend" onClick={()=>{
            Navig(`/profile/${user.username}`)
        }}>
            <div className="rightbarprofileimgcontainer">
                <img className='rightbarprofileimg' src={user.profilePicture || 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'} alt="" />
                <div className="rightbaronline"></div>
            </div>
            <span className="rightbarusername">{user.username}</span>
        </li>
    )
}