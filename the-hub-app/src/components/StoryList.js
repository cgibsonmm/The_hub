import React from 'react';
import Reddit from './Reddit'
import Video from './Video'


const StoryList = (props) => {
  return (
    <div id='story-list'>
      {
        props.youtubeRes && props.youtubeRes.map((video, index) => {
          return <Video video={video} key={index} />
        })
      }
      {
        props.redditRes && props.redditRes.map(item => {
          return <Reddit item={item} />
        })
      }
    </div>
  )
}

export default StoryList;