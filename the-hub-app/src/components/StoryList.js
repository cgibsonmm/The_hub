import React from 'react';
import YouTube from 'react-youtube';


const StoryList = (props) => {
  const opts = {
    height: '200',
    width: '375',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  const data = [...props.youtubeRes, ...props.redditRes]

  return (
    <div id='story-list'>
      {
        props.youtubeRes && props.youtubeRes.map(video => {
          return <YouTube videoId={video.id.videoId} opts={opts} key={video.id.videoId} />
        })
      }

      {
        props.redditRes && props.redditRes.map(item => {
          return <img src={`${item.data.header_img}`} />
        })
      }
    </div>
  )
}

export default StoryList;