
import React,{useState}from 'react';
import { Link ,useHistory} from 'react-router-dom';
import {Button,Badge,Avatar}from '@mui/material'
import AppsOutlined from '@mui/icons-material/AppsOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Header.css';


export function Header () {
  const [inputSearch, setInputSearch] = useState('');
  const history=useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className='header'>
          <div className="left">
            <MenuOutlinedIcon  />
            <Link to='/'>
              <img 
                className='header__logo'
                src='https://www.seekpng.com/png/full/77-772362_youtube-logo-youtube-logo-png.png'
                alt=''
              />
            </Link>
          </div>
          
          <div className="center">
          <input type='text' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='header__searchbutton'/>
            </Link>
          </div>
          <div className='header__mic'>
          < MicOutlinedIcon />
          </div>
          <div className="right">
            <Button onClick={()=>history.push(`/channel`)}><VideoCallIcon className='header__icon' color="error"/></Button>
            <AppsOutlined className='header__icon'/>
            <Badge badgeContent={"3+"} color="error">
                        <NotificationsIcon color="action" />
             </Badge>
            <div>
        <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <Avatar/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>history.push(`/login`)}>Login</MenuItem>
        <MenuItem onClick={()=>history.push(`/signup`)}>Signup</MenuItem>
        <MenuItem onClick={()=>history.push(`/channel`)}>My account</MenuItem>
      </Menu>
    </div>



            
          </div>
        </div>
    )
}



