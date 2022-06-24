import "./widgetSm.css"
import {Visibility} from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img src="/images/pic6.jpg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
                 <span className="widgetSmUsername">Samuel Abelneh</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
            </li>
        </ul>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img src="/images/pic1.jpg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
                 <span className="widgetSmUsername">Eyob Kefyalew</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
            </li>
        </ul>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img src="/images/smiley.jpg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
                 <span className="widgetSmUsername">Kalkidan Bekele</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
            </li>
        </ul>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img src="/images/pic8.jpg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
                 <span className="widgetSmUsername">Gaga Sammy</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
            </li>
        </ul>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
            <img src="/images/smiley.jpg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
                 <span className="widgetSmUsername">Hermela Sirak</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </button>
            </li>
        </ul>
    </div>
  )
}