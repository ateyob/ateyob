import "./ordersList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import {userRows} from "../../dummyData";
import { useState } from "react";

export default function UserList() {

  const [data] = useState(userRows);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'fullname', headerName: 'Full name', width: 160 },
    {
      field: 'phoneNum',
      headerName: 'Phone number',
      type: 'phone',
      width: 150,
    },
    {
        field: 'location',
        headerName: 'Order Location',
        width: 240,
      },
    {
      field: 'totalSpent',
      headerName: 'Total Order Price (ETB)',
      width: 200,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
      },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return(
          <>
          <Link to={"/order/"+params.id}>
              <button className="userListEdit">View More</button>
          </Link>
          </>
        );
      },
    },
  ];
  
  
  return (
    <div className="userList">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  )
}