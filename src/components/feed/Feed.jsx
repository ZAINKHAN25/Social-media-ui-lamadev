import Share from '../share/Share'
import './feed.css'

export default function Feed(){
    return (
        <div className='feed'>
            <div className="feedwrapper">
                <Share />
            </div>
        </div>
    )
}