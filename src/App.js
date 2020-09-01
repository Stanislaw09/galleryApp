import React,{useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import {Table} from './components/table'
import {Navbar} from './components/navbar'
import {Fullcard} from './components/fullcard'
const firebase=require('firebase')

function App(){
    const[data, setData]=useState(undefined)
    const [filter, setFilter]=useState('')

    useEffect(()=>{
        firebase
            .firestore()
            .collection('images')
            .onSnapshot(serverUpdate=>{
                const _images=serverUpdate.docs.map(item=>{
                    const data=item.data()
                    data['id']=item.id
                    return data
                })
                setData(_images)
            })
    },[])

    const handleSearch=e=>setFilter(e.target.value)
    const setFilterValue=value=>setFilter(value)

     return(
         <Switch>
             <Route exact path='/'>
                 <Navbar images={data} setFilter={handleSearch}/>
                 <Table images={data} filter={filter}/>
             </Route>
             <Route exact path='/fullcard'>
                 <Fullcard setFilterValue={setFilterValue}/>
             </Route>
         </Switch>
      )
}

export default App;
