import React, { useEffect, useState } from 'react';
import Reddit from './Reddit'
import Video from './Video'
var _ = require('lodash')

const StoryList = ({ zipData }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(zipData)
  }, [zipData])

  return (
    <div id='story-list'>
      {data.map((item, index) => {
        if (typeof item !== 'undefined') {
          return item.kind === 't5' ?
            <Reddit item={item} key={index} /> :
            <Video video={item} key={item.id.videoId} />
        }
      })}
    </div>
  )
}

export default StoryList;