import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type} > {type}</button>;
  };

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/pic1.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Abebe Kebede</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">120 ETB</td>
            <td className="widgetLgStatus">
            <Button type= "Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/pic4.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Kidus Girma</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">120 ETB</td>
            <td className="widgetLgStatus">
            <Button type= "Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/pic3.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gaga Sammy</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">120 ETB</td>
            <td className="widgetLgStatus">
            <Button type= "Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/pic5.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Hermela Sirak</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">120 ETB</td>
            <td className="widgetLgStatus">
            <Button type= "Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="/images/pic2.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Kalkidan Bekele</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">120 ETB</td>
            <td className="widgetLgStatus">
            <Button type= "Pending" />
            </td>
          </tr>
        </table>
    </div>
  )
}