import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Columns, Column } from 'bloomer'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Axios from 'axios'
import 'bulma/css/bulma.css'
import './App.css';


const KEY = '&key=AIzaSyCuLFiDzDJdu67ORKCdrNijn4xKRCtSE6k'
const KEY2 = '&key=AIzaSyBABfg1lN-Ca7PYSUvrhmoif8LnFcmdB3o'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
const RedditUrl = 'https://www.reddit.com/subreddits/search.json?q='
const ageGate = '&limit=10'

function App() {
  let URL = `${youTubeUrl}javascript${KEY2}`;
  let redditURL = `${RedditUrl}javascript${ageGate}`
  const [youtubeRes, setYoutubeRes] = useState([])
  const [redditRes, setRedditRes] = useState([])
  const [currentYTUrl, setCurrentYTUrl] = useState(URL)
  const [currentRedditUrl, setCurrentRedditUrl] = useState(redditURL)

  useEffect(() => {
    Axios.get(currentRedditUrl).then(res => {
      setRedditRes(filterRedditRes(res.data.data.children))
    }).catch(e => console.log(e.message))
  }, [currentRedditUrl])

  // useEffect(() => {
  //   Axios.get(currentYTUrl).then(res => {
  //     setYoutubeRes(filterYouTubeRes(res.data.items))
  //   }).catch(e => console.log(e.message)
  //   )
  // }, [currentYTUrl])

  useEffect(() => {
    Axios.get('yRes.json').then(res => {
      console.log(res);
      setYoutubeRes(filterYouTubeRes(res.data.items))
    }).catch(e => console.log(e.message)
    )
  }, [currentYTUrl])


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
    URL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US${KEY2}`
    setCurrentYTUrl(`${URL}`)
  }

  const fetchSearch = (slug) => {
    // setCurrentYTUrl(`${youTubeUrl}${slug}${KEY2}`)
    setCurrentRedditUrl(`${RedditUrl}${slug}${ageGate}`)
  }

  const fetchDefault = () => {
    setCurrentYTUrl(`${youTubeUrl}javascript${KEY2}`)
    setCurrentRedditUrl(`${redditURL}javascript`)
  }


  return (
    <div className="App">
      <Header />
      <Columns>
        <Column isSize='1/4'>
          <Sidebar />
        </Column >
        <Column isSize='3/4'>
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
        </Column>
      </Columns>
      <Footer />
    </div >
  );
}

export default () => {
  return (
    <Router>
      <App />
    </Router>
  )
}
