import React from 'react'
import './topbar.css'
import {Search} from '@mui/icons-material';
 
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Freshmart</span>
            </div>
            <div className="topCenter">
                <span className="menu">Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer"></div>
            <Search className='button'></Search>
            <img src="/images/sadio.jpg" alt="" className="topAvatar" /></div>
        </div>
    </div>
  )
}