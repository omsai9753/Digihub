import { useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import dowload from './download.jpg';
import './Homes.css';
import HomesContent from "./HomesContent";
const Homes=()=>{
  
    const [hbtc,sethbtc]=useState(["All","2023 cloud summit",
    "Wellbeing",
    "Certifications",
    "10K Run",
    "iRPM",
    "CIS Got Talent vlogs",
    "Operate",
    "FSI week 2023",
    "Asset vlogs","hello","NExt"]);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleButtonClick = (index) => {
      setSelectedButtonIndex(index);
    };
    return(<>
 <Grid container spacing={1}>
      {hbtc.map((x, index) => (
        
        <Grid item xs="auto" key={index} >
          <Button
            onClick={() => handleButtonClick(index)}
            variant={selectedButtonIndex === index ? "contained" : "outlined"}
          >
            {x}
          </Button>
        </Grid>
      ))}
      <HomesContent> </HomesContent>
    </Grid>
        

    </>);
}

export default Homes;