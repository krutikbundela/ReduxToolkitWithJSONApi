import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux';
// import { delPost, getAllPost, getPost } from '../redux/postSlice';


export default function Table({post}) {
    // const {loading , post , edit , } = useSelector((state) => ({...state.post}))
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userId', headerName: 'UserId', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'body', headerName: 'Body name', width: {md:260 , lg:260 } },
 
];

const rows = [];  

post &&
post.forEach((item) => {
      rows.push({
        userId: item.userId,
        id: item.id,
        title: item.title,
        body: item.body,
      });
    });



  return (
    <Box sx={{
       
        //  height: "100dvh", 
         width:{xs: "100%", sm:"100%", md:"50%", lg:"50%", xl:"50%" },
        m:2,     
    }}>

      <DataGrid
    //    style={{ textAlign: "center" }}
    //    rows={rows}
    //    columns={columns}
    //    pageSize={10}
    //    disableSelectionOnClick
       autoHeight
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 10 },
      },
    }}
    pageSizeOptions={[5, 10,20]}
        />
    </Box>
  );
}