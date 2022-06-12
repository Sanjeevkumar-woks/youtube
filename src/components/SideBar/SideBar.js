import React from 'react';
import { useHistory} from "react-router-dom";
import SideBarRow from '../SideBarRow/SideBarRow';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History';


export function SideBar()  {
  const history=useHistory();
    return (
        <div className='sidebar'>
            <SideBarRow  Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={ExploreOutlinedIcon} onClick={()=>history.push('/subscription')} title='Explore' />
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='History' />
        </div>
    )
}

export function SideBarChannel(){
    const history=useHistory();
    return(
        <div className='sidebar'>
            <SideBarRow  Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={ExploreOutlinedIcon} onClick={()=>history.push('/subscription')} title='Explore' />
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='History' />
        </div>
    );

}

