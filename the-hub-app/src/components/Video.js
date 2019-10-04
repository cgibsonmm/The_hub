import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles'
import YouTube from 'react-youtube';

import '../css/Video.css'


const opts = {
  height: '200',
  width: '400',
  borderRadius: '8',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  }
}

const Video = ({ video }) => {
  const [show, setShow] = useState(['0', 'none'])
  const [display, setDisplay] = useState(['1', 'flex'])

  const showVideo = () => {
    setDisplay(['0', 'none'])
    setShow(['1', 'flex'])
  }
  const useStyles = makeStyles({
    video: {
      opacity: show[0],
      display: show[1],
    },
    loader: {
      display: display[1],
      height: '200px',
      width: '400px',
      margin: '10px',
      backgroundColor: '#373F51',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  const classes = useStyles();

  return (
    <>
      <YouTube className={classes.video} id={`vid-${video.id.videoId}`} onReady={showVideo} videoId={video.id.videoId} opts={opts} />
      <div className={classes.loader} id={`loader-${video.id.videoId}`}>loading</div>
    </>
  )
}
export default Video;