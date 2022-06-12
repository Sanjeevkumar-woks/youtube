import React from 'react'
import './ChannelDashboard.css'
import { useHistory } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import { LineChartGraph } from './LineChart';
import {userData} from './dummyData'


export  function ChannelDashboard() {
    const history=useHistory();

  return (
  <>
  <h2 className='ChannelDashboard__h2'>ChannelDashboard</h2>
 <div className='ChannelDashboard__main'>
    <div className='ChannelDashboard__Upload'>
    <img src='https://www.gstatic.com/youtube/img/creator/no_content_illustration_upload_video_v3_darkmode.svg' alt='Creater_Image'/>
    <IconButton onClick={()=>history.push(`/channel/addvideo`)}> <CloudUploadIcon className='ChannelDashboard__Icon' /></IconButton>
    </div>
    <div className='ChannelDashboard__Analytics'>
    <h3>Channel Analytics</h3>
    <p> Current Subscribers</p>
    <p> 200</p>
    <hr/>
    <p>Views</p>
    <p>300</p>
    <hr/>
    <p>Videos</p>
    <p>10</p>
    </div>
</div>
<div className='ChannelDashboard__chart'>
    
    <LineChartGraph data={userData} title="Subscribers Analytics" grid dataKey="Active User"/>

</div> 
</>

  )
}
