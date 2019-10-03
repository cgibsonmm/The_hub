import React from 'react';
import Reddit from './Reddit'
import Video from './Video'
var _ = require('lodash')

const StoryList = ({ zipData, youtubeRes, redditRes }) => {

  console.log(zipData);



  return (
    <div id='story-list'>
      {/* {data && data.map((item, index) => {
        return item.kind === 't5' ?
          <Reddit item={item} key={index} /> :
          <Video video={item} key={item.id.videoId} />
      })} */}
    </div>
  )
}

export default StoryList;