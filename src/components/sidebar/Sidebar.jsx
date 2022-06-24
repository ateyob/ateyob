import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, PersonOutline, ShoppingBasket, ShoppingCart} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList"></ul>
                   <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                   </li>
                   <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                   </li>
                   <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                   </li>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList"></ul>
                   <li className="sidebarListItem">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                   </li>
                   <li className="sidebarListItem">
                        <ShoppingBasket className='sidebarIcon'/>
                        Products
                   </li>
                   <li className="sidebarListItem">
                        <ShoppingCart className='sidebarIcon'/>
                        Orders
                   </li>
            </div>

        </div>
    </div>
  )
}