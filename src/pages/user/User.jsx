import "./user.css"
import {PermIdentity, CalendarMonth, PhoneAndroid, MailOutline, LocationSearching } from '@mui/icons-material';

export default function User() {
  return (
    <div className="user">
        
        <div className="userTitleContainer">
            <h1 className="userTitle">User Details</h1>
            {/* <button className="userAddButton">Create</button> */}
        </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="/images/pic6.jpg" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Jon Snow</span>
                    <span className="userShowUserTitle">Computer Science</span>
                </div>
            </div>

            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                   <PermIdentity className="userShowIcon"/>
                   <span className="userShowInfoTitle">jon123</span>
                </div>
                <div className="userShowInfo">
                   <CalendarMonth className="userShowIcon"/>
                   <span className="userShowInfoTitle">10.12.2006</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                   <PhoneAndroid className="userShowIcon"/>
                   <span className="userShowInfoTitle">+251 934243245</span>
                </div>
                <div className="userShowInfo">
                   <MailOutline className="userShowIcon"/>
                   <span className="userShowInfoTitle">jon12@gmail.com</span>
                </div>
                <div className="userShowInfo">
                   <LocationSearching className="userShowIcon"/>
                   <span className="userShowInfoTitle">Addis Ababa</span>
                </div>
            </div>
        </div>
        {/* <div className="userUpdate"></div> */}
    </div>
    </div>
  )
}
