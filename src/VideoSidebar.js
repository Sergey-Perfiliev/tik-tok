import React, {useState} from 'react'
import './VideoSidebar.css'
import Favorite from '@material-ui/icons/Favorite'
import SmsIcon from '@material-ui/icons/Sms'
import ShareIcon from '@material-ui/icons/Share'
import AddCircle from '@material-ui/icons/AddCircle'

function VideoSidebar({likes, messages, shares}) {
    const [liked, setLiked] = useState(true)

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button user" >
                <div className="videoSidebar__avatar"></div>
                <AddCircle className="videoSidebar__Follow"/>
            </div>
            <div className="videoSidebar__button">
                {liked ? (
                    <Favorite fontSize="large"
                        className="button red"
                        onClick={() => setLiked(false)}/>
                ) : (
                    <Favorite fontSize="large"  onClick={() => setLiked(true)}/>
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <SmsIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar