import './sidebar.css'
import { LineStyle, PersonOutline, ShoppingCart, FormatListBulleted, Add, Category} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';




export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                   <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                   </li>
                   </Link>
                   {/* <Link to="/" className='link'>
                   <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                   </li>
                   </Link> */}
                   <Link to="/users" className='link'>
                   <li className="sidebarListItem">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                   </li>
               </Link>
                   {/* <Link to="/" className='link'>
                   <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                   </li>
                   </Link> */}
                   <Link to="/products" className='link'>
                   <li className="sidebarListItem">
                        <FormatListBulleted className='sidebarIcon'/>
                        Products List
                   </li>
               </Link>

               <Link to="/addcategory" className='link'>
                   <li className="sidebarListItem">
                        <Category className='sidebarIcon'/>
                        Add Category
                   </li>
               </Link>

               <Link to="/newproduct" className='link'>
                   <li className="sidebarListItem">
                        <Add className='sidebarIcon'/>
                        Add New Products
                   </li>
               </Link>

               <Link to="/orders" className='link'>
                   <li className="sidebarListItem">
                        <ShoppingCart className='sidebarIcon'/>
                        Orders
                   </li>
               </Link>
               <div className='logoutbutton'>
                    <ElevatedButton/>
                </div>
                   </ul>
            </div>
        </div>
    </div>
  )
}

export function ElevatedButton() {
    return (
      <Button style={{backgroundColor: "#00B300", }} variant="contained" LogoutButton>
        Logout
      </Button>
    );
  }
