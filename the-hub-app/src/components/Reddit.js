import React from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import reddit from './../images/reddit.png'
import Typography from '@material-ui/core/Typography';
import './../css/Reddit.css'


const useStyles = makeStyles({
  paper: {
    zIndex: '1',
    height: '200px',
    width: '400px',
    margin: '10px 10px 10px 10px',
    backgroundColor: '#373F51',
    color: '#FFFC31',
    textAlign: 'center',
    overflow: 'hidden'
  },
  heading: {
    color: '#EEF6EE',
  },
  link: {
    color: '#EEF6EE',
    textDecoration: 'none',
  },
  para: {
    padding: '3px',
  },
  avatar: {
    margin: '5px',
  }
})

const Reddit = ({ item }) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
  const { data } = item;

  const {
    community_icon,
    display_name_prefixed,
    header_title,
    public_description
  } = data

  const classes = useStyles()
  const avatar = () => {
    if (community_icon) {
      return community_icon
    } else {
      return reddit
    }
  }

  const cutStringLength = (str) => {
    return str.length > 150 ? str.substring(0, 150).concat('...') : str
  }

  const cutHeader = (str) => {
    return str.length > 50 ? str.substring(0, 50).concat('...') : str
  }

  const renderIfThere = () => {
    if (public_description && header_title && display_name_prefixed) {
      return (
        <animated.div style={fade}>
          < Paper className={classes.paper} >
            <a className={classes.link} href={`https://reddit.com/${display_name_prefixed}`}>
              <Avatar className={classes.avatar} src={avatar()} />
              <Typography className={classes.heading} variant='h5' component='h5'>{cutHeader(header_title)}</Typography>
              <Typography className={classes.para} component='p'>{cutStringLength(public_description)}</Typography>
            </a>
          </Paper >
        </animated.div>
      )
    }
  }

  return (
    <>
      {renderIfThere()}
    </>

  )
}

export default Reddit;