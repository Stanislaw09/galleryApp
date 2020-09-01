import React,{useState, useEffect} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import {Typography,
    makeStyles,
    Button,
    Toolbar,
    Menu,
    MenuItem,
    LinearProgress,
    Divider,
    AppBar,
    IconButton,
    CircularProgress,
    InputBase} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
const firebase=require('firebase')

const useStyles=makeStyles(theme=>({
    '@global':{
        '.MuiInputBase-root.Mui-disabled': {
            color: '#000',
        },
        '.MuiInputBase-root': {
            color: '#666',
        },
        '.MuiInputBase-root.Mui-focused':{
            backgroundColor: '#eee'
        }
    },
    header:{
        backgroundColor: 'rgb(54, 102, 110)',
        position: 'fixed'
    },
    toolbar:{
        display: 'inline',
        alignItems: 'center',
        minHeight: '30px'
    },
    close:{
        width: '50px',
        margin: '4px'
    },
    menu:{
        float: 'right',
        margin: '10px'
    },
    imageContainer:{
        height: '80vh',
        width: '50vw',
        margin: '60px 1% 1%',
        [theme.breakpoints.down('md')]:{
            width: '98%'
        }
    },
    image:{
        height: 'auto',
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '2px'
    },
    fullDescription:{
        top: '0',
        width: '100%',
        display: 'inline',
        [theme.breakpoints.up('md')]:{
            position: 'absolute',
            display: 'inline',
            width: '44%',
            left: '52%',
            margin: '60px 2%',
        },
        [theme.breakpoints.down('md')]:{
            display: 'contents',
        },
        margin: '60px 0',
        whiteSpace: 'pre-line'
    },
    title:{
        width: '100%',
        height: '30px',
        padding: '20px',
        [theme.breakpoints.up('md')]:{
            marginTop: '24px'
        },
        border: 'none',
        fontSize: '26px',
        margin: '60px 0 0 0',
        fontWeight: '600',
        fontStyle: 'italic'
    },
    description:{
        lineHeight: '1.8em',
        fontSize: '18px',
        width: '100%',
        margin: '0',
        padding: '20px 20px 80px 20px'
    },
    navButtons:{
        width: '60px',
        display: 'inline',
        margin: '0 10px'
    },
    buttonsContainer:{
        padding: '16px 3%',
        width: '44%',
        [theme.breakpoints.down('md')]:{
            width: '90%'
        }
    },
    progress:{
        width: 'calc(100% - 168px)',
        display: 'inline-block'
    },
    buttonsContainer2:{
        padding: '8px 1.5%',
        width: '44%',
        margin: '0 24px',
        [theme.breakpoints.down('md')]:{
            width: '98%',
            margin: '0'
        }
    },
    imagesInput:{
        width: '220px',
        float: 'right',
        padding: '6px 0'
    }
}))

export const Fullcard=props=>{
    const location=useLocation()
    const history=useHistory()
    const classes=useStyles()
    const data=location.state.data
    const [description, setDescription]=useState(data.description)
    const [title, setTitle]=useState(data.title)
    const [anchor,setAnchor]=useState(null)
    const [edit,setEdit]=useState(true)
    const [visible, setVisible]=useState(0)
    const [images, setImages]=useState(data.images)
    const [newImages, setNewImages]=useState([])
    const [add,setAdd]=useState(true)

    const handleDescription=e=>setDescription(e.target.value)
    const handleTitle=e=>setTitle(e.target.value)

    const handleClickMenu=e=>setAnchor(e.currentTarget)
    const handleClose=()=>setAnchor(null)

    const handlePrev=()=>{visible===0 ? setVisible(images.length-1) : setVisible(prev=>prev-1)}
    const handleNext=()=>{visible===images.length-1 ? setVisible(0) : setVisible(prev=>prev+1)}

    const deleteImage=()=>{
        const newArr=images.filter(url=>url!==images[visible])

        setImages(newArr)
        setVisible(prev=>(prev===0 ? images.length-1 : prev-1))
    }

    const handleImages=e=>{
        setAdd(true)

        if(e.target.files.length)
            setNewImages(e.target.files)
        else
            setNewImages([])
    }

    useEffect(()=>{
        let storageSend=undefined

        if(newImages.length){
            for(let i=0;i<newImages.length;i++){
                const image=newImages[i]
                storageSend=firebase.storage().ref(image.name).put(image)

                storageSend.on('state_changed', snapshot=>{
                    let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                        (progress===100 && i===newImages.length-1) && setAdd(false)
                    })
            }
        }
    },[newImages])

    const addImages=()=>{
        let arr=[]

        for(let i=0;i<newImages.length;i++){
            const image=newImages[i]
            const storageReceive=firebase.storage().ref(image.name)

            storageReceive.getDownloadURL()
                .then(_url=>{
                    arr.push(_url)

                    if(arr.length===newImages.length){
                        const newArr=[...images,...arr]
                        setImages(newArr)
                    }
                })
                .catch(error=>console.log("shit happens"))
        }
        setNewImages([])
        setAdd(true)
    }

    useEffect(()=>{
        if(edit){
            let state={...history.location.state}

            state.data.images=images
            state.data.title=title
            state.data.description=description

            history.replace({...history.location,state})
        }
    },[images,description,title,edit])

    const handleSave=()=>{
        firebase.firestore().collection('images').doc(data.id).update({
            title: title,
            description: description,
            images: images
        })

        handleClose()
        setEdit(true)
        handleClose()
    }

    const handleExit=()=>{
        if(!edit){
            if(window.confirm("Are you sure? You haven't saved changes"))
                history.push('/')
            }
        else
            history.push('/')
    }

    return(
        <>
            <AppBar className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        className={classes.close}
                        onClick={handleExit}>
                        <CloseIcon/>
                    </IconButton>

                    <Button
                        onClick={handleClickMenu}
                        color={edit ? 'default' : 'secondary'}
                        className={classes.menu}>Menu</Button>

                    <Menu
                        anchorEl={anchor}
                        keepMounted
                        open={Boolean(anchor)}
                        onClose={handleClose}>

                        <MenuItem
                            onClick={()=>{
                                setEdit(false);
                                handleClose()}}>Edit</MenuItem>
                        <MenuItem onClick={handleSave}>Save</MenuItem>
                        <MenuItem onClick={handleExit}>Exit</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <div className={classes.imageContainer}>
                {images.map((url,i)=>
                    <img
                        src={url}
                        style={{display: i===visible ? 'inline' : 'none'}}
                        alt='nothing'
                        className={classes.image}
                    />)}
            </div>

            <div className={classes.buttonsContainer}>
                <Button
                    color='secondary'
                    className={classes.navButtons}
                    onClick={handlePrev}>Prev</Button>

                <LinearProgress
                    color='secondary'
                    variant="determinate"
                    value={(visible+1)/images.length*100}
                    className={classes.progress}/>

                <Button
                    color='secondary'
                    onClick={handleNext}
                    className={classes.navButtons}
                    style={{float: 'right'}}>Next</Button>
            </div>

            <div className={classes.buttonsContainer2} style={{display: edit ? 'none' : 'block'}}>
                <Button onClick={deleteImage}>Delete</Button>

                {(add && newImages.length) ? <CircularProgress color='secondary' className={classes.circle}/> :
                <Button onClick={addImages} disabled={add} color='secondary'>Add</Button>
                }

                <input type='file' multiple onChange={handleImages} className={classes.imagesInput}/>
            </div>

            <Typography className={classes.fullDescription}>
                <InputBase
                    spellcheck='false'
                    defaultValue={title}
                    disabled={edit}
                    onChange={handleTitle}
                    className={classes.title}/>
                <Divider/>
                <InputBase
                    multiline
                    spellcheck='false'
                    disabled={edit}
                    defaultValue={description}
                    className={classes.description}
                    focused={classes.focused}
                    onChange={handleDescription}/>
            </Typography>
        </>
    )
}
