import React from 'react'
import { IconButton } from '@mui/material';

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
                backgroundColor: props.toggled ? '#8080ff' : '#808080',
                margin: '0.1em 0.25em 0.1em 0.25em',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'sans-serif',
                fontSize: '1.0em',
                fontWeight: 'bold',
                '&:hover': {
                    backgroundColor: props.toggled ?'#a0a0ff' : '#a0a0a0',
                }
            }}
        >
            {props.letter}
        </IconButton>
    )
}

export const WeekdaySetSelector = (props) => {
    return (
        <div>
            <WeekdayButton toggled={props.value[0]} letter='D' onClick={(value) => props.onSet(0, value)}/>
            <WeekdayButton toggled={props.value[1]} letter='S' onClick={(value) => props.onSet(1, value)}/>
            <WeekdayButton toggled={props.value[2]} letter='T' onClick={(value) => props.onSet(2, value)}/>
            <WeekdayButton toggled={props.value[3]} letter='Q' onClick={(value) => props.onSet(3, value)}/>
            <WeekdayButton toggled={props.value[4]} letter='Q' onClick={(value) => props.onSet(4, value)}/>
            <WeekdayButton toggled={props.value[5]} letter='S' onClick={(value) => props.onSet(5, value)}/>
            <WeekdayButton toggled={props.value[6]} letter='S' onClick={(value) => props.onSet(6, value)}/>
        </div>
    )
}