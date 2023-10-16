import './topbar.css'
import {Link, useNavigate} from 'react-router-dom'

export default function Topbar() {
    const navig = useNavigate()
    return (
        <div className='topbarcontainer'>
            <div className="topbarLeft">
                <Link to={'/'} style={{textDecoration: 'none'}}>
                <span className="logo">Zainsocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbardiv">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input placeholder='Search for Posts, Friends or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarlink">Home Page</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitem">
                        <i className="fa-solid fa-user"></i>
                        <span className="topbariconbatch">1</span>
                    </div>
                    <div className="topbariconitem">
                        <i className="fa-solid fa-message"></i>
                        <span className="topbariconbatch">2</span>
                    </div>
                    <div className="topbariconitem">
                        <i className="fa-solid fa-bell"></i>
                        <span className="topbariconbatch">13</span>
                    </div>
                </div>
                <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" className="topbarimg" />
                <i title='logout' onClick={()=>{
                    localStorage.setItem("loginperson", JSON.stringify(''))
                    navig('/login')
                }} class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    )
}