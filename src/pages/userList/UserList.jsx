import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {userRows} from "../../dummyData";
import { useState } from "react";

export default function UserList() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 200, renderCell: (params) => {
      return(
        <div className="nameListname">
            <img className="nameListImg" src={params.row.avatar} alt=""/>
            {params.row.firstName}
        </div>
      )
    } },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    {
      field: 'phoneNum',
      headerName: 'Phone number',
      type: 'phone',
      width: 200,
    },
    {
      field: 'totalSpent',
      headerName: 'Total Spent',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return(
          <>
          <Link to={"/user/"+params.id}>
              <button className="userListEdit">View More</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];
  
  
  return (
    <div className="userList">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  )
}
