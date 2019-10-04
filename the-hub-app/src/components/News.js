import React from 'react';
import { animated, useSpring } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import reddit from './../images/reddit.png'
import Typography from '@material-ui/core/Typography';

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
    padding: '5px',
  },
  avatar: {
    margin: '5px',
  }
})

const News = ({ item }) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
  const useStyles = makeStyles({
    paper: {
      zIndex: '1',
      height: '200px',
      width: '400px',
      margin: '10px 10px 10px 10px',
      textAlign: 'center',
      overflow: 'hidden',
      backgroundImage: `url(${item.urlToImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    heading: {
      padding: '5px',
      color: '#EEF6EE',
      textShadow: '0 0 1px rgb(0, 0, 0)',
    },
    link: {
      color: '#EEF6EE',
      textDecoration: 'none',
    },
    para: {
      padding: '15px',
    },
    avatar: {
      margin: '5px',
    },
    filter: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  })
  const classes = useStyles()
  return (
    <>
      <animated.div style={fade}>
        <Paper className={classes.paper}>
          <div className={classes.filter}>
            <a className={classes.link} href={item.url}>
              <Typography className={classes.heading} component='h5'>
                <Box fontSize={20}>{item.title}</Box></Typography>
              <Typography className={classes.para} component='p'>
                <Box fontSize={14}>{item.description}</Box>
              </Typography>
            </a>
          </div>
        </Paper>
      </animated.div>
    </>
  )
}
export default News;