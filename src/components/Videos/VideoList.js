import React from 'react'
import { useEffect, useState } from "react";
import { VideoCard } from './VideoCard';
import './Video.css'

export  function VideoList() {

    

const [videos,setVideos]=useState([]);

 const get=()=>{
     fetch("https://6216dcb171e7672e536d1003.mockapi.io/youtubedata")
     .then((data)=>data.json())
     .then((mvi)=>setVideos(mvi))
   }
    useEffect(get,[]);
    
  return (
    <div className='videos__list'>
       {videos.map(({id,poster,url,title,channel,channellogo,views,timestamp})=>
       <VideoCard id={id} poster={poster} url={url} title={title} channel={channel} channellogo={channellogo} views={views} timestamp={timestamp}/>)
    }
    </div>
  )
}
