import React, { useRef, useState } from 'react'
import Username from './Username'
import Stickynote from './Stickynote'

const Backgroundboard = () => {

  const [lockstate, setLock] = useState('Lock');
  const [mlocation, setLocation] = useState({x:100,y:100});
  const [dragable,setDragable]= useState(false);
  const [findid,setFindid] = useState(true);
  const board = useRef();
  let currentelement=null;

  

  // let dragable = false;
  // let bgcolor = "red";

  const movementhandler = (e)=>{
    if(dragable){
      setLocation({x:e.clientX,y:e.clientY});
      currentelement.style.left = e.clientX;
      currentelement.style.top = e.clientY;
    }
    if(findid){
      currentelement = e.target.id;
      console.log(currentelement);
      
    }
  }



  return (
    <div ref={board} className='pt-10 w-screen h-screen justify-center text-center bg-amber-100' onMouseMove={(lockstate==="Unlock")?movementhandler:null} onMouseDown={()=>{
      if(currentelement.classList.contains("stickynotes")){
       setDragable(true);
       setFindid(false);
      }
    }} onMouseUp={()=>{
      setDragable(false);
      setFindid(true);
    }}>
        
        
        <button className={`bg-${(lockstate==='Lock'?'red':'green')}-400 p-2 fixed left-0 top-0 rounded-md`} onClick={()=>{
          setLock(lockstate==='Lock'?'Unlock':'Lock');
        }} >{lockstate}</button>
        <Username/>
        <Stickynote location={{x:100,y:20,id:"sticky1"}}/>
        <Stickynote location={{x:100,y:250,id:"sticky2"}}/>
        <Stickynote location={{x:205,y:220,id:"sticky3"}}/>
        

    
      </div>
  )
}

export default Backgroundboard