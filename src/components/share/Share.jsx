import './share.css'

export default function Share() {
    return (
        <div className='share'>
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl33XheDto8Y20nOIAA74-rYqO-T9y4eEloyZ2Tzea&s" alt="" className="shareprofileimg" />
                    <input placeholder="What's in your mind Zain?" className='shareinput' />
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
                    <button className="sharebutton">Share</button>
                </div>
            </div>
        </div>
    )
}