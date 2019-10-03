import React from 'react';
import StoryList from './StoryList'

const Main = ({ redditRes, youtubeRes }) => {
  return (
    <main className='main'>
      <StoryList
        redditRes={redditRes}
        youtubeRes={youtubeRes}
      />
    </main>

  )
}

export default Main;