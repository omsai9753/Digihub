import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import dowload from './download.jpg';

const Offering = () => {
  const [text, setText] = useState([
    "I believe that we ach sector that we serve across. Additionally we have two unique focusareas –Emerging Industry Solutions (EIS) were we focus on incubating new solutions to solve client’s pressing needs and Converge which combines Deloitte’s deep industry expertise, enterprise-quality software, and a curated ecosystem of partners to deliver proven technology solutions",
    "I welcome you to take your time to explore this site, connect with practitioners and get embedded","ALL"
  ]);

  return (<>
    <Grid container my={2} spacing={2} sx={{ paddingLeft: 1 }} >
      <Grid item xs={9}>
        <Typography>
          “I believe that we can solve anything with our passion, attitude and collective team work. I am very proud of my CIS team whoisdelivering core industry solutions across industries/sectors where we leverage our team’s deep expertise across industries and technologies to enable vertical and horizontal growth in each sector that we serve across. Additionally we have two unique focusareas –Emerging Industry Solutions (EIS) were we focus on incubating new solutions to solve client’s pressing needs and Converge which combines Deloitte’s deep industry expertise, enterprise-quality software, and a curated ecosystem of partners to deliver proven technology solutions.
          I welcome you to take your time to explore this site, connect with practitioners and get embedded”
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={dowload}
              alt="green iguana"
            />
            <CardContent style={{ opacity: 0.5, background: "transparent" }}>
              <Typography gutterBottom variant="h5" component="div">
                Sachin Dala
              </Typography>
              <Typography variant="body2" color="#42f545">
                CIS Market Offering Leader
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
</Grid>
<Grid container  spacing={2} sx={{ paddingLeft: 1 }} >
      {text.map((t, index) => (
        <Grid item xs={6} key={index} >
          <Box
            borderRadius={4}
            boxShadow={3}
            p={2}
            bgcolor="white"
            display="flex"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Typography variant="body1">{t}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default Offering;
