import { Grid } from '@mui/material';
import { useState } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Backdrop from './component/Backdrop';
import Main from './component/Main/Main';


function App() {
  const [show, setShow] = useState(false);
  const changer=(e)=>{
    if(!e.target.classList.contains('Menu')){
     setShow(prev=>!prev)
    }
  }
  return (
    <>
    <Grid container>
    <Grid item xs={12}  md={3} lg={2} xl={2} >
    <Backdrop show={show} changer={changer}  />
    </Grid>
    <Grid item xs={12}  md={9} lg={10} xl={10} >
    <Switch>
      <Route exact path="/" >
      <Main clickHanlder={()=>setShow(!show)}/>
      </Route>
      <Route exact path="/profile" >
      <h1>Profile</h1>
      </Route>
    </Switch>
     
    </Grid>
    </Grid>
    
   
    </>
  );
}

export default App;
