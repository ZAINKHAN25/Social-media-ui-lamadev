import './topbar.css'

export default function Topbar() {
    return (
        <div className='topbarcontainer'>
            <div className="topbarLeft">
                <span className="logo">Zainsocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbardiv">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
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
                        <i class="fa-solid fa-user"></i>
                        <span className="topbariconbatch">1</span>
                    </div>
                    <div className="topbariconitem">
                        <i class="fa-solid fa-message"></i>
                        <span className="topbariconbatch">2</span>
                    </div>
                    <div className="topbariconitem">
                        <i class="fa-solid fa-bell"></i>
                        <span className="topbariconbatch">13</span>
                    </div>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl33XheDto8Y20nOIAA74-rYqO-T9y4eEloyZ2Tzea&s" alt="" className="topbarimg" />
            </div>
        </div>
    )
}