import './rightbar.css'
import { Users } from '../../dummyData.js'
import Online from '../online/Online.jsx'


export default function Rightbar({ profile }) {

    function Homerightbar() {
        return (
            <>
                <div className="birdthdaycontainer">
                    <img className='birthdayimg' src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBnaWZ0fGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                    <span className="birthdaytext">
                        <b>Zain</b> and <b>3 other frinds</b> have birthday today
                    </span>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/013/057/701/small/ad-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg" className='rightbarad' alt="" />
                <h4 className="rightbartitle">Online Friends</h4>
                <ul className="rightbarfriendlist">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}

                </ul>
            </>
        )
    }


    function Profilerightbar() {
        return (
            <>
                <h4 className='rightbartitle'>User Information</h4>
                <div className="rightbarinfo">
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">City:</span>
                        <span className="rightbarinfovalue">Karachi</span>
                    </div>
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">From:</span>
                        <span className="rightbarinfovalue">Pakistan</span>
                    </div>
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">Relationship:</span>
                        <span className="rightbarinfovalue">Single</span>
                    </div>
                </div>
                <h4 className='rightbartitle'>User Friends</h4>
                <div className="rightbarfollowings">
                    <div className="rightbarfollowing">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFblndSZeUbaKJTXoUSPh0tpT_VhOLo_UnoQ&usqp=CAU" alt="" className="rightbarfollowingimg" />
                        <div className="rightbarfollowingname">
                            Sudais
                        </div>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="rightbarfollowingimg" />
                        <div className="rightbarfollowingname">
                            Talha
                        </div>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?b=1&s=612x612&w=0&k=20&c=t7Z7NBXf5t7jWqoFxsH7B3bgrO3_BznOOhqEXWywjOc=" alt="" className="rightbarfollowingimg" />
                        <div className="rightbarfollowingname">
                            Rehan
                        </div>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="https://img.freepik.com/free-photo/portrait-smiling-happy-young-man-isolated-white_186202-6708.jpg" alt="" className="rightbarfollowingimg" />
                        <div className="rightbarfollowingname">
                            Shahid
                        </div>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs=" alt="" className="rightbarfollowingimg" />
                        <div className="rightbarfollowingname">
                            Ryaz
                        </div>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1902/lightfieldstudios190221039/118054392-young-man-with-open-mouth-having-idea-and-pointing-up-with-finger-isolated-on-white.jpg?ver=6" alt="" className="rightbarfollowingimg" />
                        <div className="rightbarfollowingname">
                            Naveed
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                { profile ? <Profilerightbar /> : <Homerightbar/>}
            </div>
        </div>
    )
}