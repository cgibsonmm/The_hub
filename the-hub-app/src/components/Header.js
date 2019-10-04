import React, { useState } from 'react';
import LinkList from './LinkList'
import Typography from '@material-ui/core/Typography'
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: '1200',
    width: '100vw',
  },
  text: {
    margin: '10px 3px',
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
    justifyContent: 'center',
  },
  drawer: {
    backgroundColor: '#373F51',
    '&label.Mui-focused': {
      color: 'green',
    },
  },

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
    toggleClose()
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
              <TextField
                className={classes.input}
                label="Search"
                onChange={handleChange}
                onClick={e => e.stopPropagation()}
                placeholder='search'
                variant="outlined"
              />
              <Button className={classes.button} variant="contained" type="submit">Search</Button>
            </form>
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={handleClick} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer
              classes={{ paper: classes.drawer }}
              anchor='top'
              open={isActive}
              onClose={toggleClose}
            >
              <LinkList />
              <Divider />
              <form className={classes.dropDown} onSubmit={handleSubmit}>
                <TextField
                  className={classes.input}
                  label='Search'
                  onChange={handleChange}
                  onClick={e => e.stopPropagation()}
                  placeholder='search'
                  variant="outlined"

                />
                <Button className={classes.button} variant="contained" type="submit">Search</Button>
              </form>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header;