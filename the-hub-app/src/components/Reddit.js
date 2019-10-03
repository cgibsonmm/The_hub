import React from 'react'
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
    padding: '4px',
  },
  link: {
    color: '#FFFC31',
    textDecoration: 'none',
  },
  para: {
    padding: '3px',
  }
})

const Reddit = ({ item }) => {
  // const filter = new Filter
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
    return str.length > 200 ? str.substring(0, 200).concat('...') : str
  }

  const cutHeader = (str) => {
    return str.length > 50 ? str.substring(0, 50).concat('...') : str
  }

  const renderIfThere = () => {
    if (public_description && header_title && display_name_prefixed) {
      return (< Paper className={classes.paper} >
        <a className={classes.link} href={`https://reddit.com/${display_name_prefixed}`}>
          <Avatar src={avatar()} />
          <Typography variant='h5' component='h5'>{cutHeader(header_title)}</Typography>
          <Typography className={classes.para} component='p'>{cutStringLength(public_description)}</Typography>
        </a>
      </Paper >)
    }
  }

  return (
    <>
      {renderIfThere()}
    </>

  )
}

export default Reddit;