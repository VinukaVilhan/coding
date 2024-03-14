import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Navigationbar = () => {

    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <header>
                <Link to='/'>
                   <h1>NAVBAR</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}

                    {!user && (
                        <div>
                            <Link to='/login'>Log IN</Link>
                            <Link to='/signUp'>Sign Up</Link>
                            <Link to='/aboutUs'>About Us</Link>
                        </div>
                    )}
                    
                    
                </nav>
        </header>
    );
}

export default Navigationbar


