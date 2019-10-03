import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  text: {
    color: 'rgba(255, 252, 49, 1)',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(255, 252, 49, 0.7)'
    }
  },
  nav: {
    display: 'flex',
    background: 'rgba(55, 63, 81, 1)',
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: '10px',
    backgroundColor: 'rgba(255, 252, 49, 1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 252, 49, 0.7)'
    },
  },
  dropDown: {
    margin: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }

}))


const Header = () => {
  const classes = useStyles();

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

  const toggleClose = () => {
    setIsActive(false)
  }
  return (
    <header className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.nav} >
          <Link to='/' className={classes.text}>
            <Typography variant='h2'>The Hub</Typography>
          </Link>

          <Hidden smDown>
            <form only="mdDown" onSubmit={handleSubmit}>
              <Input onChange={handleChange} onClick={e => e.stopPropagation()} placeholder='search' />
              <Button className={classes.button} variant="contained" type="submit">Search</Button>
            </form>
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={handleClick} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={isActive} onClose={toggleClose}>
              <form className={classes.dropDown} only="mdDown" onSubmit={handleSubmit}>
                <Input onChange={handleChange} onClick={e => e.stopPropagation()} placeholder='search' />
                <Button className={classes.button} variant="contained" type="submit">Search</Button>
              </form>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </header >
  )
}

export default Header;