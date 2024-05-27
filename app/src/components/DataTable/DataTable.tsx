import React from 'react';
import { CustomGrid } from './styles';

export const DataTable = ({ rows, columns, loading }: { rows: any; columns: any, loading: boolean }) => {
  return (
    <div style={{ height: 610, width: '100%' }}>
      <CustomGrid rows={rows} columns={columns} loading={loading} />
    </div>
  );
};

export default DataTable;
