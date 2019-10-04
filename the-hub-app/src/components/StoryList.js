import React, { useEffect, useState } from 'react';
import Reddit from './Reddit'
import Video from './Video'
import News from './News'
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
          if (item.kind === 't5') {
            return <Reddit item={item} key={index} />
          } else if (item.type === 'NEWS') {
            return <News item={item} key={index} />
          } else {
            return <Video video={item} key={item.id.videoId} />
          }
        }
      })}
    </div>
  )
}

export default StoryList;