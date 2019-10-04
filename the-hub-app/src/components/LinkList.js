import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
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
  return (
    <>
      <List>
        {['Trending', 'Prefrences'].map((item, index) => (
          <ListItem key={index} onClick={() => linkTo(item)} button>
            <ListItemIcon>
              <TrendingUpIcon className={classes.link} />
            </ListItemIcon>
            <ListItemText className={classes.link} primary={`${item}`} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default LinkList;