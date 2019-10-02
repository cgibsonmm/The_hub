import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  card: {
    width: 375,
    height: 200,
    background: 'rgb(12,24,50)'
  }
}))

const Reddit = ({ item }) => {
  const classes = useStyles();


  const { data } = item

  return (
    <a href={`https://reddit.com/${data.display_name_prefixed}`}>
      <Card className={classes.card}>
        <h2>{data.display_name_prefixed}</h2>
        <h3>{data.header_title}</h3>
        <p>{data.public_description}</p>
      </Card >
    </a>
  )
}

export default Reddit;