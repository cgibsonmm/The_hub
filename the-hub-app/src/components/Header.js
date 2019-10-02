import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { getThemeProps } from '@material-ui/styles';

const Header = ({ handleInput, handleSearchSubmit }) => {
  const [input, setInput] = useState('')
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <header>
      <nav>
        <h1><Link to='/'>The Hub</Link></h1>
        <Link to='/trending'>Trending</Link>
        <form onSubmit={handleSubmit}>
          <TextField onChange={handleChange} placeholder='search' />
          <Button type="submit" variant="contained" color="primary">Search</Button>
        </form>
      </nav>


    </header>
  )
}

export default Header;