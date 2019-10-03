import React from 'react'
import './../css/Reddit.css'
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  Image
} from 'bloomer'

const Reddit = ({ item }) => {
  const { data } = item

  return (
    <Card style={{ height: '400', width: '200', margin: '300' }}>
      <a href={`https://reddit.com/${data.display_name_prefixed}`}>
        <CardHeader>
          <Image isSize='48x48' src={data.community_icon} />
          <CardHeaderTitle>{data.display_name_prefixed}</CardHeaderTitle>
        </CardHeader>
        <h3>{data.header_title}</h3>
        <p>{data.public_description}</p>
      </a>
    </Card >
  )
}

export default Reddit;