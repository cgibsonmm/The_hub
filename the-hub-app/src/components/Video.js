import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { makeStyles, withStyles } from '@material-ui/styles'
import YouTube from 'react-youtube';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
  const [show, setShow] = useState(['0', 'none'])
  const [display, setDisplay] = useState(['1', 'flex'])

  const showVideo = () => {
    setDisplay(['0', 'none'])
    setShow(['1', 'flex'])
  }

  const ColorProgress = withStyles({
    root: {
      color: '#FFFC31'
    }
  })(CircularProgress);


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
    },
    progress: {
      color: '#FFFC31'
    }
  })

  const classes = useStyles();

  return (
    <>
      <animated.div style={fade}>
        <YouTube className={classes.video} id={`vid-${video.id.videoId}`} onReady={showVideo} videoId={video.id.videoId} opts={opts} />
      </animated.div>
      <animated.div style={fade}>
        <div className={classes.loader} id={`loader-${video.id.videoId}`}>
          <ColorProgress />
        </div>
      </animated.div>
    </>
  )
}
export default Video;