import React from 'react'

const Reddit = ({ item }) => {

  const { data } = item

  return (
    <a href={`https://reddit.com/${data.display_name_prefixed}`}>
      <div >
        <h2>{data.display_name_prefixed}</h2>
        <h3>{data.header_title}</h3>
        <p>{data.public_description}</p>
      </div>
    </a>
  )
}

export default Reddit;