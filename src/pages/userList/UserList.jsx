import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';


export default function userList() {

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
          <button className="userListEdit">Edit</button>
          <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 2, lastName: 'Snow', firstName: 'Jon', avatar:"/images/pic4.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 3, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 4, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 5, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 6, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 7, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 8, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 9, lastName: 'Snow', firstName: 'Jon', avatar:"/images/pic1.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 10, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 11, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 12, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 13, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 14, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 15, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 16, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
    { id: 17, lastName: 'Snow', firstName: 'Jon', avatar:"/images/smiley.jpg" , phoneNum: +251921567692, totalSpent: '255 ETB' },
  ];
  return (
    <div className="userList">
        <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  )
}
