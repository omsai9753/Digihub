import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import MyComponent from './MyComponent';
import './Edit.css';
import Menus from './Menu';
import Homes from './Homes';
import HomesContent from './HomesContent';
import Offereingoptions from './offeringoptions';

const MyComponents = (props) => {
    const [homes,sethome]=useState(true);
    const [offering,setoffering]=useState(false);
    const handlehome=(event)=>{
 sethome(true);
 setoffering(false);
    }
    const handleoffereing=()=>{
      sethome(!true);
      setoffering(!false);
    }
  return (
    <>
    <Grid container spacing={2} my={2}>
    <Grid item xs={12}>
        <MyComponent></MyComponent>
    </Grid>
    <Grid item xs={2} >
       { <Menus Home={handlehome} offereing={handleoffereing}></Menus>
}
    </Grid>
    {homes &&<>
    <Grid item xs={10} >
       <Homes></Homes>
    </Grid>
    </>
}
{offering &&<>
    <Grid item xs={10} >
      <Offereingoptions></Offereingoptions>
    </Grid>
    </>
}
    </Grid>
</>
  );
};

export default MyComponents;
