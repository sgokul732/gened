import React from 'react'
import RightPanelTable1 from '../RightPanelTable1'
import RightPanelTable2 from '../RightPanelTable2'
import RightPanelTable3 from '../RightPanelTable3'
import './index.css'
export default function RightPanel(props) {
  return (
props.tab==="academic" ? <RightPanelTable1/> : 
props.tab==="distributive" ? <RightPanelTable2/>:<RightPanelTable3/>
  )
}
