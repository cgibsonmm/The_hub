import React from 'react';
import Reddit from './Reddit'
import Video from './Video'

const StoryList = ({ youtubeRes, redditRes }) => {
  const data = [...youtubeRes, ...redditRes]
  return (
    <div id='story-list'>
      {data && data.map((item, index) => {
        return item.kind === 't5' ?
          <Reddit item={item} key={index} /> :
          <Video video={item} key={item.id.videoId} />
      })}
    </div>
  )
}

export default StoryList;