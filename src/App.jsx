import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import {PlayerContext} from './context/PlayerContext'
import Opening from './components/Opening';

const App = ()=>{

const {audioRef,track,time} = useContext(PlayerContext);

const [isSplashvisible,setSplashvisible] = useState(true);
  
useEffect(()=>{
  const timer = setTimeout(()=>{
    setSplashvisible(false);
  },4000)

  return ()=>clearTimeout(timer);
},[])



  return(
    <>
    {isSplashvisible && <Opening/>}
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex '>
            <Sidebar/>
            <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track?.file} preload='auto'></audio>
    </div>
    </>
  )
}

export default App;