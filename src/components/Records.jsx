import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';    


const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 150,
    },
    {
      field: 'semester',
      headerName: 'Semester',
      type: 'number',
      width: 100,
    }
  ];
  
  const rows = [
    { id: 1, name: 'Nandini Krishna', department: 'CS', semester: 'Spring' },
    { id: 2, name: 'Kevin Abey Issac', department: 'EC', semester: 'Fall' },
    { id: 3, name: 'Ambu Bharath', department: 'CE', semester: 'Summer' },
    { id: 4, name: 'Alvin Mathews', department: 'ME', semester: 'Winter' },
    { id: 5, name: 'Rohith B Nair', department: 'CS   ', semester: 'Spring' },
    { id: 6, name: 'Varun S', department: 'Red Priestess', semester: 'Fall' },
    
  ];
  

const Records = () => {
  return (
  <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  </>
  )
}

export default Records