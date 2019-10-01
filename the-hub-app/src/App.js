import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Axios from 'axios'
import './App.css';



const KEY = '&key=AIzaSyCuLFiDzDJdu67ORKCdrNijn4xKRCtSE6k'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='


function App() {
  const URL = `${youTubeUrl}javascript${KEY}`;
  const [youtubeRes, setYoutubeRes] = useState([])
  const [currentYTUrl, setCurrentYTUrl] = useState(URL)

  useEffect(() => {
    Axios.get(URL).then(res => {
      setYoutubeRes(res.data.items)
    })
  }, [URL])
  return (
    <div className="App">
      <Header />
      <Main youtubeRes={youtubeRes} />
      <Footer />
    </div>
  );
}

export default App;
