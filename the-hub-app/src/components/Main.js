import React from 'react';
import StoryList from './StoryList'

const Main = ({ redditRes, youtubeRes, zipData }) => {
  return (
    <main className='main'>
      <StoryList
        redditRes={redditRes}
        youtubeRes={youtubeRes}
        zipData={zipData}
      />
    </main>

  )
}

export default Main;