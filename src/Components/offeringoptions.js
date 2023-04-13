import Offering from "./offering";
import Grid from '@mui/material/Grid';
import { useState } from "react";
import { Button, CardActionArea, CardActions } from '@mui/material';

const Offereingoptions=()=>{
    const [hbtc,sethbtc]=useState(["All",
    "Cloud Engineering",
    "Application Modernization",
    "Operations Transformation",
    "Core Industry Solutions",
    "Operations Transformation",
    "Core Technology Operations"]);
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
      <Offering></Offering>
    </Grid>
        

    </>);
}
export default Offereingoptions;