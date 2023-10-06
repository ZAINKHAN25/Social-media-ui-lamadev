import './rightbar.css'
import {Users} from '../../dummyData.js'
import Online from '../online/Online.jsx'


export default function Rightbar(){
    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
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
                        <Online key={u.id} user={u}/>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}