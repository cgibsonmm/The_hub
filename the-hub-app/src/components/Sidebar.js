import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    zIndex: '1',
    top: 'auto',
    background: '#333333',
    width: '200px'
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
  }
});


const Sidebar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawer }}
          variant="permanent"
          open
        >
          <List>
            <ListItem button>
              <Link to='/trending' className={classes.link}>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText className={classes.link} primary="test" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  )
}

export default Sidebar;