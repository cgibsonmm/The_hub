import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Axios from 'axios'
import './App.css';


const KEY = '&key=AIzaSyCuLFiDzDJdu67ORKCdrNijn4xKRCtSE6k'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
const RedditUrl = 'https://www.reddit.com/subreddits/search.json?q='
const ageGate = '&limit=10'

function App() {
  let URL = `${youTubeUrl}javascript${KEY}`;
  let redditURL = `${RedditUrl}javascript${ageGate}`
  const [youtubeRes, setYoutubeRes] = useState([])
  const [redditRes, setRedditRes] = useState([])
  const [currentYTUrl, setCurrentYTUrl] = useState(URL)
  const [currentRedditUrl, setCurrentRedditUrl] = useState(redditURL)

  useEffect(() => {
    Axios.get(currentRedditUrl).then(res => {
      console.log('hello')
      setRedditRes(filterRedditRes(res.data.data.children))
    }).catch(e => console.log(e.message))
    Axios.get(currentYTUrl).then(res => {
      setYoutubeRes(filterYouTubeRes(res.data.items))
    }).catch(e => console.log(e.message)
    )
  }, [currentRedditUrl, currentYTUrl])

  const filterRedditRes = (data) => {
    return data.filter(item => {
      return item.data.over18 === false
    })
  }

  const filterYouTubeRes = (data) => {
    return data.filter(item => {
      return item.id.videoId
    })
  }

  const trending = () => {
    URL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US${KEY}`
    setCurrentYTUrl(`${URL}`)
  }

  const fetchSearch = (slug) => {
    setCurrentYTUrl(`${youTubeUrl}${slug}${KEY}`)
    setCurrentRedditUrl(`${RedditUrl}${slug}${ageGate}`)
  }

  const fetchDefault = () => {
    setCurrentYTUrl(`${youTubeUrl}javascript${KEY}`)
    setCurrentRedditUrl(`${redditURL}javascript`)
  }


  return (
    <div className="App">
      {/* <Header handleSearchSubmit={handleSearchInput} handleInput={handleInput} /> */}
      <Header />
      <Switch>
        <Route exact path='/' render={() => {
          fetchDefault()
          return <Main redditRes={redditRes} youtubeRes={youtubeRes} />
        }} />
        <Route exact path='/search/:slug' render={({ match }) => {
          fetchSearch(match.params.slug)
          return <Main redditRes={redditRes} youtubeRes={youtubeRes} />
        }} />
        <Route exact path='/trending' render={() => {
          trending()
          return <Main redditRes={redditRes} youtubeRes={youtubeRes} />
        }} />
      </Switch>
      <Footer />
    </div>
  );
}

export default () => {
  return (
    <Router>
      <App />
    </Router>
  )
}
