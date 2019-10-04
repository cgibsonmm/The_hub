import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const Switches = () => {
  const [yTOn, setYTOn] = useState(true)
  const [redditOn, setRedditOn] = useState(true)
  const [newsOn, setNewsOn] = useState(true)

  const handleChange = (typ) => {
    return
  }
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={yTOn}
              onChange={handleChange('YT')}
              disabled
            />
          }
          label='YouTube'
        />
        <FormControlLabel
          control={
            <Switch
              checked={yTOn}
              onChange={handleChange('NW')}
              disabled
            />
          }
          label='News'
        />
        <FormControlLabel
          control={
            <Switch
              checked={yTOn}
              onChange={handleChange('RD')}
              disabled
            />
          }
          label='Reddit'
        />
      </FormGroup>
    </>
  )
}

export default Switches;