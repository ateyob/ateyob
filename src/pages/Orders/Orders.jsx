import "./orders.css"
import { CalendarMonth, PhoneAndroid, LocationSearching } from '@mui/icons-material';

export default function User() {
  return (
    <div className="user">
        
        <div className="userTitleContainer">
            <h1 className="userTitle">Order Details</h1>
            {/* <button className="userAddButton">Create</button> */}
        </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="/images/pic6.jpg" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Eyob Kefyalew</span>
                </div>
            </div>

            <div className="userShowBottom">
                {/* <span className="userShowTitle">Account Details</span> */}
                <div className="userShowInfo">
                   <PhoneAndroid className="userShowIcon"/>
                   <span className="userShowInfoTitle">+251 934243245</span>
                </div>
                <div className="userShowInfo">
                   <LocationSearching className="userShowIcon"/>
                   <span className="userShowInfoTitle">Kebena, Addis Ababa</span>
                </div>
                <div className="userShowInfo">
                   <CalendarMonth className="userShowIcon"/>
                   <span className="userShowInfoTitle">10/12/2006</span>
                </div>



                <span className="userShowTitle">Cart Details</span>

<table className="orderCartTable">
  <tr>
    <th className="orderItem">Item</th>
    <th className="orderPrice">Price</th>
  </tr>
  <tr>
    <td className="orderItem">Banana</td>
    <td className="orderPrice">40birr/Kg</td>
  </tr>
  <tr>
    <td className="orderItem">Tomato</td>
    <td className="orderPrice">30birr/Kg</td>
  </tr>
  <tr>
    <td className="orderItem">potato</td>
    <td className="orderPrice">22birr/Kg</td>
  </tr>
  <tr>
    <td className="orderItem">Milk</td>
    <td className="orderPrice">29birr/L</td>
  </tr>
  <tr>
    <td className="orderItem">Yoghurt</td>
    <td className="orderPrice">29birr</td>
  </tr>
  <tr>
    <td className="orderItem">Orange</td>
    <td className="orderPrice">70birr/Kg</td>
  </tr>
  <tr >
   <td></td>
    <td className="orderTotalPrice">220birr</td>
  </tr>
</table>

                
            </div>
        </div>
        {/* <div className="userUpdate"></div> */}
    </div>
    </div>
  )
}
