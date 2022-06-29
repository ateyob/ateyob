import "./orders.css"
import { CalendarMonth, PhoneAndroid, LocationSearching } from '@mui/icons-material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            </div>
            <SpanningTable />
        </div>
    </div>
    </div>
  )
}

const TAX_RATE = 0.09;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Banana)', 4, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export function SpanningTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product Title</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}