import React from 'react';
import YouTube from 'react-youtube';

const opts = {
  height: '200',
  width: '375',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  }
}

const Video = ({ video }) => {
  console.log(video);

  return (
    <YouTube videoId={video.id.videoId} opts={opts} />
  )
}
export default Video;