import React from 'react';
import YouTube from 'react-youtube';
import {
  Card,
} from 'bloomer'
import '../css/Video.css'

const opts = {
  height: '500',
  width: '200',
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