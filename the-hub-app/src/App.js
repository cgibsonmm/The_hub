import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Axios from 'axios'
import './App.css';


const KEY = '&key=AIzaSyCuLFiDzDJdu67ORKCdrNijn4xKRCtSE6k'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
// const RedditUrl = "https://www.reddit.com/r/upliftingnews.json?raw_json=1&limit=10"
const RedditUrl = 'https://www.reddit.com/subreddits/search.json?q='

function App() {
  let URL = `${youTubeUrl}javascript${KEY}`;
  let redditURL = `${RedditUrl}javascript`
  const [input, setInput] = useState('')
  const [youtubeRes, setYoutubeRes] = useState([])
  const [redditRes, setRedditRes] = useState([])
  const [currentYTUrl, setCurrentYTUrl] = useState(URL)
  const [currentRedditUrl, setCurrentRedditUrl] = useState(redditURL)


  useEffect(() => {
    Axios.get(currentRedditUrl).then(res => {
      setRedditRes(res.data.data.children)
    }).catch(e => console.log(e.message))
    // Axios.get(currentYTUrl).then(res => {
    //   setYoutubeRes(res.data.items)
    // }).catch(e => console.log(e.message)
    // )
  }, [currentRedditUrl, currentYTUrl])


  const handleSearchInput = () => {
    URL = `${youTubeUrl}${input}${KEY}`
    redditURL = `${RedditUrl}${input}`
    setCurrentRedditUrl(redditURL)
    setCurrentYTUrl(URL)
  }

  const handleInput = (formInput) => {

    setInput(formInput)
  }

  return (
    <div className="App">
      <Header handleSearchSubmit={handleSearchInput} handleInput={handleInput} />
      <Main redditRes={redditRes} youtubeRes={youtubeRes} />
      <Footer />
    </div>
  );
}

export default App;
