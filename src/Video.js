import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'


function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
  	};

  	return (
        <div className='video'>
			<video
				className="video__player"
				loop
				onClick={onVideoPress}
				ref={videoRef}
				src={""}
			></video>
			<VideoFooter 
				channel="KavoSergey" 
				description="Description" 
				song="The Rolling Stones - Sympathy For The Devil" />
			<VideoSidebar 
				likes={3112}
				messages={44}
				shares={7}/>
      	</div>
	);
}

export default Video;