
import MicExternalOnOutlinedIcon from '@mui/icons-material/MicExternalOnOutlined';
import offeringImg from './offering.png'; 
import AcademyImg from './Academy.png';
import Grid from '@mui/material/Grid';
import Homeimg from './Home.png';
import myCBOimg from './myCBO.png';
import certificateImg from './Certificates.png';
import blogsImg from './Blogs.png';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
const Menus=(props)=>{

    const handleclick=()=>{
        props.Home();
    }
    const handleoffering=()=>{
      props.offereing();
    }
    return (<>
    <Grid container >
    <Sidebar >
<Menu>
<Grid item xs='auto'>
<MenuItem style={{ position: 'relative' }} onClick={handleclick}>
          <img src={Homeimg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Home</span>
        </MenuItem>
        
          <MenuItem style={{ position: 'relative' }} onClick={handleoffering}>
          <img src={offeringImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Offering</span>
        </MenuItem>
        <MenuItem style={{ position: 'relative' }}>
          <img src={AcademyImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Offering</span>
        </MenuItem>
        <MenuItem style={{ position: 'relative' }}>
          <img src={certificateImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Certificates</span>
        </MenuItem>
        <MenuItem style={{ position: 'relative' }}>
          <img src={blogsImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Blogs</span>
        </MenuItem>
        <MenuItem style={{ position: 'relative' }}>
          <img src={myCBOimg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>myCBO</span>
        </MenuItem>

        <div style={{ borderTop: '3px solid #ccc', margin: '10px 0' }}></div>

        <MenuItem style={{ position: 'relative' }}>
          <img src={offeringImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '3px',color: '#42f545',fontWeight: 'bold' }}>Read later</span>
        </MenuItem>
        <MenuItem style={{ position: 'relative' }}>
          <img src={AcademyImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Subscriptions</span>
        </MenuItem>
        <MenuItem style={{ position: 'relative' }}>
          <img src={certificateImg} alt="Image" width="30" height="30" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px' }} />
          <span style={{ marginLeft: '32px',color: '#42f545',fontWeight: 'bold' }}>Trending</span>
        </MenuItem>
        </Grid>
</Menu>

    </Sidebar>
    </Grid>
        </>);
}
export default Menus;