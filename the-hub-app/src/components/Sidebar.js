import React, { useState } from 'react'
import LinkList from './LinkList'
import Switches from './Switches'

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    zIndex: '1',
    top: '85px',
    background: '#333333',
    width: '200px',
    color: '#FFFC31',
    boxShadow: '0 0 4px rgb(19, 19, 19)'
  },
});


const Sidebar = () => {
  const classes = useStyles()
  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawer }}
          variant="permanent"
        >
          <LinkList />
          <Switches />
        </Drawer>
      </Hidden>
    </>
  )
}

export default Sidebar;