import React,{useState, useEffect} from 'react'
import {CardView} from './card'
import {Grid, CircularProgress, makeStyles} from '@material-ui/core'

const useStyles=makeStyles(theme=>({
    container:{
        padding: '20px 0',
        gridAutoFlow: 'column',
        width: '100%',
        margin: '0',
        [theme.breakpoints.up('md')]:{
            padding: '20px'
        }
    }
}))

export const Table=props=>{
    const classes=useStyles()
    const [images, setImages]=useState([])

    useEffect(()=>{
        props.images && setImages(props.images)
    },[props])

    return(
        <>
            {images.length ?
                <Grid container spacing={4} className={classes.container}>
                    {images.map(item=>item.title.toLowerCase().includes(props.filter.toLowerCase()) && <CardView key={item.id} data={item}/>)}
                </Grid> :
                <CircularProgress color='secondary' style={{marginLeft: '50%'}}/>}
        </>
    )
}
