import { Button,TextField  } from '@mui/material';
import { useState } from "react";
import { useHistory} from "react-router-dom";
import './ChannelDashboard.css'

export function AddVideo() {

  const history=useHistory();
  const [id, setId] = useState("");
  const [poster, setPoster] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [channel,setChannel]=useState("");
  const [channellogo,setChannelligo]=useState("");
  const [views, setViews]=useState(0);
  const [timestamp,SetTimestamp]=useState("");



  const Upload=() => {
    const newVideo = {
      id,
      poster,
      url,
      title,
      channel,
      channellogo,
      views,
      timestamp
    }
    fetch("https://6216dcb171e7672e536d1003.mockapi.io/youtubedata",{
      method:"POST",
      body: JSON.stringify(newVideo),
      headers:{"Content-Type": "application/json"},
    })
    .then((data)=>data.json())
    .then(()=>history.push("/Chennal"));
  }
  return (
    <div className="AddVideo">
        <h2>Upload Video</h2>
        <TextField 
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter Title" />
      <TextField 
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Poster Url" />
      <TextField 
        onChange={(event) => setUrl(event.target.value)}
        placeholder="Enter Video Url" />
        
      <br />
      <Button
        className="add-btn"
        variant="outlined"
        onClick={Upload}
      >
        Upload
      </Button>
    </div>
  );
}
