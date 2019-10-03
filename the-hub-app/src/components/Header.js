import React, { useState, useStyles } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Header = ({ handleInput, handleSearchSubmit }) => {
  const [input, setInput] = useState('')
  const [isActive, setIsActive] = useState(false)
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
    e.target.reset()
  }

  const handleChange = (e) => {
    e.stopPropagation()
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.stopPropagation()
    setIsActive(!isActive)
  }
  return (
    <header>
      <Link to='/'><h1>The Hub</h1></Link>


      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} onClick={e => e.stopPropagation()} placeholder='search' />
        <button isColor='primary' type="submit">Search</button>
      </form>
    </header>
  )
}

export default Header;