import { useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import dowload from './download.jpg';

const HomesContent=()=>{
  const [num,setnum]=useState(["a","b","c","d","e",3,4,6,7,88,8,9,9,0,9]);

    return(<>
    <Grid container spacing={2} my={0.2} sx={{ paddingLeft: 1 }}>
    {num.map(x=>(
    <Grid item xs={3}>
        
    <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={dowload}
              alt="green iguana"
            />
            <CardContent style={{ opacity: 0.5, background: "transparent" }}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
    </Grid>
))}
    </Grid>
    

    </>);
}
export default HomesContent;