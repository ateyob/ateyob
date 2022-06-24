import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';


export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,000 ETB</span>
            <span className="featuredMoneyRate">
                -10.8 <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
            <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">9,777 ETB</span>
            <span className="featuredMoneyRate">
                -9.8 <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
            <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">9888 ETB</span>
            <span className="featuredMoneyRate">
                +1.8 <ArrowUpward className="featuredIcon"/>
            </span>
        </div>
            <span className="featuredSub">Compared to last month</span>
            </div>
    </div>
  )
}
