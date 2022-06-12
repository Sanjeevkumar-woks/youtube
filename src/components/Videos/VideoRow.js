import React from 'react'
import { useHistory} from "react-router-dom";
import Card from '@mui/material/Card'

export  function VideoRow({id,poster,url,title,channel,channellogo,views,timestamp}) {
    const history=useHistory()
  return (
    <Card className='VideoRow__main'  onClick={()=>history.push(`/video/${id}`)}>
        <img src={poster} alt="poster" className='VideoRow__poster'/>
        <div className='VideoCard__details'>
        <img className='VideoCard__channellogo' src={channellogo} alt="channellogo"/>
        <div className='VideoCard__text'>
        <p>{title}</p>
        <p>{channel}</p>
        <p className='VideoCard__small'>views{views}.{timestamp}</p>
        </div>
        </div>
    </Card>
  )
}
