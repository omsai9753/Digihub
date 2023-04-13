import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const MyComponent = () => {
 

  return (
    <>
    <div>
    <Grid container>
     
    <Grid item xs={4}>
   
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
          >  
            <h1 >CBO Digital Hub</h1>
          </MenuItem>
          </Menu>
      
      </Grid>
      
      
      <Grid item xs={5}>

        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          
        />
        
      </Grid>
      <Grid item xs={1}>
      <IconButton> 
      <MicOutlinedIcon />
      </IconButton>
      </Grid>
    </Grid>
    </div>
</>
  );
};

export default MyComponent;
