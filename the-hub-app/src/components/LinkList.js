import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import BuildIcon from '@material-ui/icons/Build'
import SportsFootballIcon from '@material-ui/icons/SportsFootball'
import PollIcon from '@material-ui/icons/Poll'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  link: {
    display: 'flex',
    textDecoration: 'none',
    color: '#FFFC31'
  }
})

const LinkList = () => {
  let history = useHistory()

  const linkTo = (item) => {
    history.push(`/${item}`)
  }

  const classes = useStyles();
  const icons = [
    <TrendingUpIcon className={classes.link} />,
    <SportsFootballIcon className={classes.link} />,
    <PollIcon className={classes.link} />,
    <BuildIcon className={classes.link} />,


  ]
  return (
    <>
      <List>
        {['Trending', 'Sports', 'Finance', 'Preferences'].map((item, index) => (
          <>
            <ListItem key={index} onClick={() => linkTo(item)} button>
              <ListItemIcon>
                {icons[index]}
              </ListItemIcon >
              <ListItemText className={classes.link} primary={`${item}`} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  )
}

export default LinkList;