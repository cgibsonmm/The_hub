import React from 'react';
import Sidebar from './Sidebar'
import StoryList from './StoryList'

const Main = ({ redditRes, youtubeRes, zipData }) => {
  return (
    <main className='main'>
      <Sidebar />
      <StoryList
        redditRes={redditRes}
        youtubeRes={youtubeRes}
        zipData={zipData}
      />
    </main>

  )
}

export default Main;