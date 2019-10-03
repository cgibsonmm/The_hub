import React from 'react'
import './../css/Reddit.css'

const Reddit = ({ item }) => {
  const { data } = item

  return (
    <div>
      <a href={`https://reddit.com/${data.display_name_prefixed}`}>
        <img src={data.community_icon} />
        <h3>{data.header_title}</h3>
        <p style={{ height: '200' }}>{data.public_description}</p>
      </a>
    </div>
  )
}

export default Reddit;