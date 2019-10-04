import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';
import Axios from 'axios';
import Moment from 'react-moment';
import Preferences from './components/Preferences';

const _ = require('lodash');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFC31',
    },
    seconday: {
      main:
        '#30192A',
    },
    light: {
      main: '#EFF6EE',
    },

    coal: {
      main: '#373F51',
    },
    gray: {
      main: '#9197AE',
    },
  },
});


const date = new Date()


const KEY = '&key=AIzaSyCuLFiDzDJdu67ORKCdrNijn4xKRCtSE6k';
const KEY2 = '&key=AIzaSyBABfg1lN-Ca7PYSUvrhmoif8LnFcmdB3o';
const NEWSKEY = '&apiKey=666f8a0e6a334a81877a908b32ca1ea8';
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=';
const RedditUrl = 'https://www.reddit.com/subreddits/search.json?q=';
const ageGate = '&limit=20';
let newsUrl = `https://newsapi.org/v2/everything?q=`


function App() {
  let URL = `${youTubeUrl}javascript${KEY2}`;
  let NEWSURL = `${newsUrl}javascript${NEWSKEY}`
  const redditURL = `${RedditUrl}javascript${ageGate}`;

  const [youtubeRes, setYoutubeRes] = useState([]);
  const [redditRes, setRedditRes] = useState([]);
  const [newsRes, setNewsRes] = useState([])

  const [currentYTUrl, setCurrentYTUrl] = useState(URL);
  const [currentRedditUrl, setCurrentRedditUrl] = useState(redditURL);
  const [currentNewsUrl, setCurrentNewsUrl] = useState(NEWSURL)


  const [zipData, setZipData] = useState([]);

  useEffect(() => {
    Axios.get(currentRedditUrl).then((res) => {
      console.log(res);

      setRedditRes(filterRedditRes(res.data.data.children));
    }).catch((e) => console.log(e.message));
  }, [currentRedditUrl]);

  useEffect(() => {
    Axios.get(currentYTUrl).then(res => {
      setYoutubeRes(filterYouTubeRes(res.data.items))
    }).catch(e => console.log(e.message)
    )
  }, [currentYTUrl])

  // useEffect(() => {
  //   Axios.get('yRes.json').then((res) => {
  //     setYoutubeRes(filterYouTubeRes(res.data.items));
  //   }).catch((e) => console.log(e.message));
  // }, [currentYTUrl]);

  useEffect(() => {
    Axios.get(currentNewsUrl).then(res => {
      let newsD = res.data.articles.map(item => {
        let pair = { type: 'NEWS' }
        return { ...item, ...pair }
      })
      setNewsRes(newsD)
    })
  }, [currentNewsUrl])

  useEffect(() => {
    const zipper = (_.zip(youtubeRes, redditRes, newsRes).flat());
    setZipData(zipper)
  }, [redditRes, youtubeRes, newsRes]);


  const filterRedditRes = (data) => data.filter((item) => item.data.over18 === false);

  const filterYouTubeRes = (data) => data.filter((item) => item.id.videoId);

  const trending = () => {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us${NEWSKEY}`;
    URL = `https://www.googleapis.com/youtube/v3/search?chart=mostPopular&part=snippet&maxResults=20${KEY2}`
    setCurrentYTUrl(URL);
    setCurrentNewsUrl(newsUrl)
    setCurrentRedditUrl(`${RedditUrl}trending${ageGate}`);
  };

  const fetchSearch = (slug) => {
    setCurrentNewsUrl(`${newsUrl}${slug}${NEWSKEY}`)
    setCurrentYTUrl(`${youTubeUrl}${slug}${KEY2}`)
    setCurrentRedditUrl(`${RedditUrl}${slug}${ageGate}`);
  };

  const fetchDefault = () => {
    setCurrentNewsUrl(`${newsUrl}javascript${NEWSKEY}`)
    setCurrentYTUrl(`${youTubeUrl}javascript${KEY2}`);
    setCurrentRedditUrl(`${redditURL}javascript`);
  };


  return (

    <div className="App">
      <Header theme={theme} />
      <Sidebar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            fetchDefault();
            return <Main redditRes={redditRes} youtubeRes={youtubeRes} zipData={zipData} />;
          }}
        />
        <Route
          exact
          path="/search/:slug"
          render={({ match }) => {
            fetchSearch(match.params.slug);
            return <Main redditRes={redditRes} youtubeRes={youtubeRes} zipData={zipData} />;
          }}
        />
        <Route
          exact
          path="/trending"
          render={() => {
            trending();
            return <Main redditRes={redditRes} youtubeRes={youtubeRes} zipData={zipData} />;
          }}
        />

        <Route exact path='/preferences' component={Preferences} />
      </Switch>
      <Footer />
    </div>
  );
}

export default () => (
  <Router>
    <App />
  </Router>
);
