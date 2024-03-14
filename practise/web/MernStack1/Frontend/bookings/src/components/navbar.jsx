import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <Box sx={{ flexGrow: 1, width:'100%', margin:'0', textAlign:"left"  }}>
          <AppBar position="relative">
            <Toolbar>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 6}}
              >
                
              </IconButton>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1, color:"white", fontFamily:'fanatsy' }}>
                Velaro Hotels
              </Typography>
              <Button component={Link} to="/bookings" color="inherit">Bookings</Button>
              <Button color="inherit">SignUp</Button>
              <Button component={Link} to="/login" color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}


export default Navbar