import React, { useState } from 'react'
import LeftNav from '../LeftNav'
import RightPanel from '../RightPanel'
import './index.css'
export default function Gened() {
  const[tab,setTab]=useState("academic");
  return (
    <div className="gened">
      <LeftNav tab={tab} setTab={setTab}/>
      <RightPanel tab={tab}/>
    </div>
  )
}
