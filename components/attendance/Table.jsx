import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {members, tablecolumns} from '../../dummy_data';

const DataTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={members}
        columns={tablecolumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}


export default DataTable;