import React from 'react'
import {
  Card,
  CardHeader,
  CardHeaderTitle,
} from 'bloomer'

const Reddit = ({ item }) => {
  const { data } = item
  return (
    <Card>
      <a href={`https://reddit.com/${data.display_name_prefixed}`}>
        <CardHeader>
          <CardHeaderTitle>{data.display_name_prefixed}</CardHeaderTitle>
        </CardHeader>
        <h3>{data.header_title}</h3>
        <p>{data.public_description}</p>
      </a>
    </Card >
  )
}

export default Reddit;