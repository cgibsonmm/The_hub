import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Header = ({ handleInput, handleSearchSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearchSubmit()
  }

  const handleChange = (e) => {
    handleInput(e.target.value)
  }
  return (
    <header>
      <nav>
        <h1>The Hub</h1>
        <form onSubmit={handleSubmit}>
          <TextField onChange={handleChange} placeholder='search' only={['md', 'l']} />
          <Button type="submit" variant="contained" color="primary">Search</Button>
        </form>
      </nav>


    </header>
  )
}

export default Header;