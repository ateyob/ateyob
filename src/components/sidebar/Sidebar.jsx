import './sidebar.css'
import { LineStyle, PersonOutline, ShoppingCart, FormatListBulleted, Add, Category} from '@mui/icons-material';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/home" className='link'>
                   <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                   </li>
                   </Link>
                 
                   <Link to="/users" className='link'>
                   <li className="sidebarListItem">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                   </li>
               </Link>
                 
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
              

             
                   </ul>
            </div>

        </div>
    </div>
  )
}
