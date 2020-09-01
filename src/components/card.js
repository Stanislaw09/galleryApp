import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Card,
    CardActions,
    Grid,
    CardContent,
    Typography,
    Popover,
    Button,
    makeStyles} from '@material-ui/core'
const firebase=require('firebase')

const useStyles=makeStyles({
    title:{
        margin: '0',
        paddingLeft: '12px',
        lineHeight: '2.6em'
    },
    imgContainer:{
        maxHeight: '500px',
        overflow: 'hidden'
    },
    media:{
        width: '100%'
    },
    description:{
        maxHeight: '220px',
        whiteSpace: 'pre-line',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    actions:{
        display: 'block'
    },
    more:{
        float: 'right'
    },
    deleteLabel:{
        textAlign: 'center',
        color: 'rgb(194, 80, 131)',
        width: '160px',
        margin: '10px'
    }
})

export const CardView=(props)=>{
    const history=useHistory()
    const classes=useStyles()
    const [anchorDelete, setAnchorDelete]=useState(null)
    const {data}=props
    const deleteOpen=Boolean(anchorDelete)

    const deleteCard=()=>firebase.firestore().collection('images').doc(data.id).delete()

    const handleDelete=e=>setAnchorDelete(e.currentTarget)
    const handleCloseDelete=()=>setAnchorDelete(null)

    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <h3 className={classes.title}>{data.title}</h3>

                <div className={classes.imgContainer}>
                    <img src={data.images[0]} alt='nothing' className={classes.media}/>
                </div>

                <CardContent>
                    <Typography
                        color='textSecondary'
                        className={classes.description}>
                        {data.description}
                    </Typography>
                </CardContent>

                <CardActions className={classes.actions}>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={()=>history.push('/fullcard', {data})}
                        className={classes.more}>More</Button>

                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleDelete}>Delete</Button>
                </CardActions>
                
                <Popover
                    open={deleteOpen}
                    anchorEl={anchorDelete}
                    onClose={handleCloseDelete}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>

                    <Typography className={classes.deleteLabel}>Are You sure?</Typography>
                    <Button onClick={()=>setAnchorDelete(null)}>Canel</Button>
                    <Button onClick={deleteCard} style={{float: 'right'}}>Delete</Button>
                </Popover>
            </Card>
        </Grid>
    )
}
