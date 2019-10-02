import React from 'react';
import Reddit from './Reddit'
import Video from './Video'


const StoryList = (props) => {
  return (
    <div id='story-list'>
      {
        props.youtubeRes && props.youtubeRes.map(video => {
          return <Video video={video} key={video.id.videoId} />
        })
      }
      {
        props.redditRes && props.redditRes.map((item, index) => {
          return <Reddit item={item} key={index} />
        })
      }
    </div>
  )
}

export default StoryList;