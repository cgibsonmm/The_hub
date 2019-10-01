import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Axios from 'axios'
import './App.css';


const KEY = '&key=AIzaSyCuLFiDzDJdu67ORKCdrNijn4xKRCtSE6k'
const youTubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='

function App() {
  let URL = `${youTubeUrl}javascript${KEY}`;
  const [input, setInput] = useState('')
  const [youtubeRes, setYoutubeRes] = useState([])
  const [currentYTUrl, setCurrentYTUrl] = useState(URL)

  useEffect(() => {
    Axios.get(currentYTUrl).then(res => {
      setYoutubeRes(res.data.items)
    })
  }, [currentYTUrl])


  const handleSearchInput = () => {
    URL = `${youTubeUrl}${input}${KEY}`
    setCurrentYTUrl(URL)
  }

  const handleInput = (formInput) => {
    setInput(formInput)
  }

  return (
    <div className="App">
      <Header handleSearchSubmit={handleSearchInput} handleInput={handleInput} />
      <Main youtubeRes={youtubeRes} />
      <Footer />
    </div>
  );
}

export default App;
