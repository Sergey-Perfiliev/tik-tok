import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@material-ui/icons/MusicNote"

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@rafehqazi</h3>
                <p>this is a description</p>
                <MusicNoteIcon />
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    )
}

export default VideoFooter
