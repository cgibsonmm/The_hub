import React from 'react';
import YouTube from 'react-youtube';
import {
  Card,
} from 'bloomer'

const opts = {
  height: '200',
  width: '375',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  }
}

const Video = ({ video }) => {
  return (
    <Card>
      <YouTube videoId={video.id.videoId} opts={opts} />
    </Card>
  )
}
export default Video;