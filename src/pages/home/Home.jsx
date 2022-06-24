// import Chart from "../../components/charts/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLg from "../../components/WidgetLarge/WidgetLg"
import WidgetSm from "../../components/widgetSmall/WidgetSm"
import "./home.css"

export default function home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        {/* <Chart/> */}
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
