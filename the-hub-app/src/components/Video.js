import React from 'react';
import YouTube from 'react-youtube';

import '../css/Video.css'

const opts = {
  height: '200',
  width: '400',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  }
}

const Video = ({ video }) => {
  return (
    <>
      <YouTube videoId={video.id.videoId} opts={opts} />
    </>
  )
}
export default Video;