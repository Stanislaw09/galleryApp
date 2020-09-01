import React,{useState, useEffect} from 'react'
import {TextField,
    makeStyles,
    Button,
    Dialog,
    DialogContent,
    CircularProgress} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
const firebase=require('firebase')

const useStyles=makeStyles(theme=>({
    container:{
        padding: '20px',
        width: '50%',
        [theme.breakpoints.down('sm')]:{
            width: '90%'
        }
    },
    icon:{
        margin: '20px 0'
    },
    new:{
        float: 'right',
        marginTop: '14px'
    },
    input:{
        display: 'block',
        minWidth: '300px',
        margin: '20px 0'
    },
    buttons:{
        padding: '16px 0 8px'
    },
    close:{
        float: 'right'
    }
}))

export const Navbar=props=>{
    const classes=useStyles()
    const [newCard, setNewCard]=useState(false)
    const [description, setDescription]=useState('')
    const [title, setTitle]=useState('')
    const [files, setFiles]=useState([])
    const [save, setSave]=useState(true)

    useEffect(()=>{
        let storageSend=undefined

        if(files.length){
            for(let i=0;i<files.length;i++){
                const file=files[i]
                storageSend=firebase.storage().ref(file.name).put(file)

                storageSend.on('state_changed', snapshot=>{
                    let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                        (progress===100 && i===files.length-1) && setSave(false)
                    })
            }
        }
    },[files])

    const handleSave=async()=>{
        let arr=[]

        for(let i=0;i<files.length;i++){
            const file=files[i]
            const storageReceive=firebase.storage().ref(file.name)

            storageReceive.getDownloadURL()
                .then(_url=>{
                    arr.push(_url)

                    if(arr.length===files.length)
                        sendCard(arr)
                })
                .catch(error=>console.log("shit happens"))
        }
    }

    const sendCard=async(urls)=>{
        await firebase.firestore().collection('images').add({
            title: title,
            images: urls,
            description: description,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setNewCard(false)
    }

    const handleImages=e=>{
        setSave(true)

        if(e.target.files.length)
            setFiles(e.target.files)
        else
            setFiles([])
    }

    return(
        <div className={classes.container}>
            <SearchIcon className={classes.icon}/>
            <TextField label='Find your flashback' color='secondary' onChange={props.setFilter}/>
            <Button
                variant='outlined'
                color='secondary'
                onClick={()=>setNewCard(true)}
                className={classes.new}>New</Button>

            {newCard && (
                <Dialog
                    open={newCard}
                    fullWidth={true}
                    maxWidth={'md'}
                    className={classes.dialog}>
                    <DialogContent>
                        <TextField
                            label='title'
                            fullWidth
                            color='secondary'
                            onChange={e=>setTitle(e.target.value)}
                            className={classes.input}/>
                        <TextField
                            multiline
                            fullWidth
                            variant='outlined'
                            color='secondary'
                            rows={8}
                            label='description'
                            onChange={e=>setDescription(e.target.value)}
                            className={classes.input}/>

                        <input type='file' multiple onChange={handleImages}/>

                        <div className={classes.buttons}>
                            <Button
                                onClick={()=>setNewCard(false)}
                                className={classes.close}>Close</Button>

                            {(save && files.length) ? <CircularProgress className={classes.save} color='secondary'/> :
                            <Button
                                onClick={handleSave}
                                color='secondary'
                                className={classes.save}
                                disabled={save}>Save</Button>}
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}
