import React from 'react';
import Sidebar from './Sidebar';
import StoryList from './StoryList'

const Main = ({ youtubeRes }) => {
  return (
    <main>
      <Sidebar />
      <StoryList youtubeRes={youtubeRes} />
    </main>

  )
}

export default Main;