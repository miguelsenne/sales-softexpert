import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const CustomGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-columnHeader': {
    background: '#3546a2',
    color: '#fff',
  },
  '& .MuiDataGrid-row, .MuiDataGrid-cell': {
    borderRight: 0,
    backgroundColor: '#fff',
  },
  '& .MuiSvgIcon-root': {
    color: '#fff',
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: '#363636',
  },
  '& .MuiTablePagination-root': {
    color: '#fff',
  },
}));
