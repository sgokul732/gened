import React from 'react'
import { Button } from 'reactstrap'
import './index.css'
export default function LeftNav(props) {
  const{tab,setTab}=props;

  const tab1=tab==="academic"?"primary":"secondary";
  const tab2=tab==="distributive"?"primary":"secondary";
  const tab3=tab==="additional"?"primary":"secondary";
  return (
    <div className="leftPanel">
        <Button className="btn" color={tab1} onClick={()=>setTab("academic")}>Academic<br></br> Foundation</Button><br></br>
        <Button className="btn" color={tab2} onClick={()=>setTab("distributive")}>Distributive <br></br> Requirement</Button><br></br>
        <Button className="btn" color={tab3} onClick={()=>setTab("additional")}>Additional<br></br> Requirement</Button><br></br>
        </div>
  )
}
