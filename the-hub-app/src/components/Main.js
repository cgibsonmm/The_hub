import React from 'react';
import Sidebar from './Sidebar';
import StoryList from './StoryList'

const Main = ({ redditRes, youtubeRes }) => {
  return (
    <main className='main'>
      <Sidebar />
      <StoryList redditRes={redditRes} youtubeRes={youtubeRes} />
    </main>

  )
}

export default Main;