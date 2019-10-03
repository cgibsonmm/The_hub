import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import reddit from './../images/reddit.png'
import './../css/Reddit.css'

const Reddit = ({ item }) => {
  const { data } = item


  const avatar = () => {
    if (data.community_icon) {
      return data.community_icon
    } else {
      return reddit
    }
  }

  return (
    <Paper>
      <a href={`https://reddit.com/${data.display_name_prefixed}`}>
        <Avatar src={avatar()} />
        <h3>{data.header_title}</h3>
        <p style={{ height: '200' }}>{data.public_description}</p>
      </a>
    </Paper>
  )
}

export default Reddit;