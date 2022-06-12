import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle'
import  ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import  ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import  PostAddRoundedIcon from '@mui/icons-material/PostAddRounded'
import  CheckCircleRoundedIcon  from '@mui/icons-material/CheckCircleOutlineRounded'
import  NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded'
import {Button,TextField,InputAdornment,Avatar} from '@mui/material'
import { VideoRow } from './VideoRow.js';
import './Video.js'

export function Video() {

  const {id}= useParams();
 const [video,setVideo]=useState([]);
 const [videos,setVideos]=useState([]);
 
 const getVideo= ()=>{
    fetch(`https://6216dcb171e7672e536d1003.mockapi.io/youtubedata/${id}`,
   {method:"GET"}).then((data)=>data.json()).then((vd)=>setVideo(vd));
 };

 const get=()=>{
     fetch("https://6216dcb171e7672e536d1003.mockapi.io/youtubedata")
     .then((data)=>data.json())
     .then((vds)=>setVideos(vds))
   }
    
  useEffect(get,[]);
  useEffect(getVideo,[]);

const [{url,title,channel,channellogo,timestamp,views,comments}]=[video];
console.log(comments)
console.log(url);
  return (
    <div className='video__main'>
      <div className='video__video'>
        <iframe width="680" height="380"
          src={url} title={title}>
        </iframe>
        <h3>{title}{timestamp}</h3>
        <div className='video__details'>
          <p>views{views}.{timestamp}</p>
            <div className='video__likes'>
            <Button><ThumbUpOutlinedIcon/></Button>
            <Button><ShareRoundedIcon/></Button>
            <Button><PostAddRoundedIcon/></Button>
          </div>
        </div>
        <hr/>
        <div className='video__channel'>
        <div className='video__channeldetails'>
        <img className='VideoCard__channellogo' src={channellogo} alt="channellogo"/>
        <p>{channel}<sub><CheckCircleRoundedIcon/></sub></p>
        </div>
        <div className='video__subscribe'>
        <Button variant="contained" color="success">Subscribe</Button>
          <Button><NotificationsActiveRoundedIcon/></Button>
        </div>
        </div>
        <hr/>
        <div className='video__comment'>
          <div>
          <TextField
          fullWidth
        id="input-with-icon-textfield"
        label="Comment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

      </div>
      <div className='video__comment__Buttons'>
      <Button>Cancle</Button>
      <Button>Comment</Button>
      </div>
      <div className='video__comments'>
         {/*{comments.map( ({user,comment})=>
         <Comment user={user} comment={comment}/>
        )}  */}
      </div>
        </div>
      </div>
      <div className='video__similer'>
      <div className='video__similar__details'>
 {videos.map(({id,poster,url,title,channel,channellogo,views,timestamp})=>
       <VideoRow id={id} poster={poster} url={url} title={title} channel={channel} channellogo={channellogo} views={views} timestamp={timestamp}/>)
    }
      </div>

      </div>
    </div>
  )
}

function Comment({user,comment}){
  return<div>
<p> <AccountCircle /><sup>{user}</sup></p>
<p> {comment}</p>
<hr/>
  </div>
}