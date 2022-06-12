import React, { useState } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { VideoList } from './components/Videos/VideoList';
import { Video } from './components/Videos/Video';
import { ChannelDashboard } from './components/Channel/ChannelDashboard';
import { AddVideo } from './components/Channel/AddVideo';



export const context = React.createContext();

function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      <Header/>
        <Switch>
        <context.Provider value={[log, setLog]}>
          <Route exact path='/'>
            <div className="mainpage">
              <SideBar/>
              
              <VideoList/>
            </div>
          </Route>
          <Route exact path='/video/:id'> <Video/> </Route>
          <Route exact path='/subscription'></Route>
          <Route exact path='/channel'> <ChannelDashboard/> </Route>
           <Route exact Path='/channel/addvideo'> <AddVideo/> </Route> 
           <Route path='*' element={<div className='App'>
                <div className="App-header" >
                    <h1 style={{
                        fontSize:"50px"
                    }} >404</h1>
                </div>
            </div>} />
          


            </context.Provider>
        </Switch>
    </div>
  );
}

export default App;
