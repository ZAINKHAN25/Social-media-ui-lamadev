import { useState } from 'react'
import axios from 'axios'
import './share.css'

export default function Share() {
    let [issharebuttontrue, setissharebtntrue] = useState(false);
    let [inputtxt, setinputtxt] = useState('');
    async function posthandler() {
        const loginperson = JSON.parse(localStorage.getItem("loginperson"));
        try {
            const response = await axios.post(`https://social-media-app-with-mongo-db.vercel.app/posts/v1/`, {
                userId: loginperson,
                desc: inputtxt
            }).then(res => {
                console.log(res)
                window.location.reload();
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='share'>
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" className="shareprofileimg" />
                    <input placeholder="What's in your mind Zain?" onChange={(e) => {
                        if (e.target.value === '') {
                            setissharebtntrue(false)
                        } else {
                            setissharebtntrue(true);
                            setinputtxt(e.target.value)
                        }
                    }} className='shareinput' />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareopttion">
                            <i className="fa-solid fa-images shareicon redclr"></i>
                            <span className='shareoptiontext'>Photo or Video</span>
                        </div>
                        <div className="shareopttion">
                            <i className="fa-solid fa-tag shareicon blueclr"></i>
                            <span className='shareoptiontext'>Tag</span>
                        </div>
                        <div className="shareopttion">
                            <i className="fa-solid fa-location-dot shareicon greenclr"></i>
                            <span className='shareoptiontext'>Location</span>
                        </div>
                        <div className="shareopttion">
                            <i className="fa-solid fa-face-smile-beam shareicon golderclr"></i>
                            <span className='shareoptiontext'>Feelings</span>
                        </div>
                    </div>
                    <button onClick={posthandler} className={`sharebutton ${issharebuttontrue && 'hovervalue'}`}>Share</button>
                </div>
            </div>
        </div>
    )
}