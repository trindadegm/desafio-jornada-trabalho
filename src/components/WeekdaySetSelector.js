import React from 'react'
import { Grid, IconButton } from '@mui/material';

export const WeekdayButton = (props) => {
  return (
    <IconButton
      onClick={() => {
        props.onClick(!props.toggled)
      }}
      sx={{
        borderRadius: '50%',
        width: '3.0em',
        height: '3.0em',
        color: '#ffffff',
        backgroundColor: props.toggled ? '#2196f3' : '#9e9e9e',
        margin: '0.1em 0.25em 0.1em 0.25em',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        fontSize: '1.0em',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: props.toggled ? '#a0a0ff' : '#a0a0a0',
        }
      }}
    >
      {props.letter}
    </IconButton>
  )
}

export const WeekdaySetSelector = (props) => {
  const letters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  return (
    <Grid container columns={24} direction='row' justifyContent='center'>
      {
        letters.map((letter, index) => {
          return (
            <Grid item xs={3}>
              <WeekdayButton
                toggled={props.value[index]}
                letter={letter}
                onClick={(value) => props.onSet(index, value)}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}