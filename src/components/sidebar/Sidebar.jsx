import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, PersonOutline, ShoppingBasket, ShoppingCart} from '@mui/icons-material';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                   <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                   </li>
                   </Link>
                   <Link to="/" className='link'>
                   <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                   </li>
                   </Link>
                   <Link to="/" className='link'>
                   <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                   </li>
                   </Link>
                   </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList"></ul>
                <Link to="/users" className='link'>
                   <li className="sidebarListItem">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                   </li>
               </Link>
               <Link to="/products" className='link'>
                   <li className="sidebarListItem">
                        <ShoppingBasket className='sidebarIcon'/>
                        Products
                   </li>
               </Link>
               <Link to="/" className='link'>
                   <li className="sidebarListItem">
                        <ShoppingCart className='sidebarIcon'/>
                        Orders
                   </li>
               </Link>
            </div>

        </div>
    </div>
  )
}
