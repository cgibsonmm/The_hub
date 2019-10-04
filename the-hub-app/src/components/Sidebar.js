import React, { useState } from 'react';
import LinkList from './LinkList'

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    zIndex: '1',
    top: '80px',
    background: '#333333',
    width: '200px',
    color: '#FFFC31'
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
        </Drawer>
      </Hidden>
    </>
  )
}

export default Sidebar;