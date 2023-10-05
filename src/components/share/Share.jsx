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
                            <i className="fa-solid fa-images shareicon"></i>
                            <span className='shareoptiontext'>Photo or Video</span>
                        </div>
                        <div className="shareopttion">
                            <i class="fa-solid fa-tag shareicon"></i>
                            <span className='shareoptiontext'>Photo or Video</span>
                        </div>
                        <div className="shareopttion">
                            <i class="fa-solid fa-location-dot shareicon"></i>
                            <span className='shareoptiontext'>Photo or Video</span>
                        </div>
                        <div className="shareopttion">
                            <i class="fa-solid fa-face-smile-beam shareicon"></i>
                            <span className='shareoptiontext'>Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}