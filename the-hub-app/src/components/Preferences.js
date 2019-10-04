import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '50%',
    justifyContent: 'center',
    top: '100px',
    backgroundColor: '#EFF6EE',
    alignItems: 'center',
  }
})

const Preferences = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <Typography>
          <List>
            <ListItem>hello</ListItem>
          </List>
        </Typography>
      </Card>
    </>
  )
}

export default Preferences;