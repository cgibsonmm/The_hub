import React from 'react';
import YouTube from 'react-youtube';


const StoryList = (props) => {
  const opts = {
    height: '240',
    width: '450',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }



  return (
    <ul>
      {
        props.youtubeRes && props.youtubeRes.map(video => {
          return <YouTube videoId={video.id.videoId} opts={opts} key={video.id.videoId} />
        })
      }
    </ul >
  )
}

export default StoryList;