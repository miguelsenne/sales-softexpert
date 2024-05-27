import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Product {
  name: string;
  price: number;
  qty: number;
  total: number;
  tax: number;
}

interface RowProps {
  row: {
    id: number;
    total: number;
    totalTaxes: number;
    products: Product[];
  };
}

interface SalesTableProps {
  rows: {
    id: number;
    total: number;
    totalTaxes: number;
    products: Product[];
  }[];
}

function formatarParaMoeda(valor: any) {
  return parseInt(valor).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.").replace(/^/, 'R$ ');
}

function Row({ row }: RowProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{formatarParaMoeda(row.total)}</TableCell>
        <TableCell align="right">{formatarParaMoeda(row.totalTaxes)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Produtos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#fff' }}>Produto</TableCell>
                    <TableCell sx={{ color: '#fff' }}>Preço</TableCell>
                    <TableCell sx={{ color: '#fff' }}>Quantidade</TableCell>
                    <TableCell sx={{ color: '#fff' }} align="right">Total</TableCell>
                    <TableCell sx={{ color: '#fff' }} align="right">Total Imposto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product: Product) => (
                    <TableRow key={product.name}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.qty}</TableCell>
                      <TableCell align="right">{formatarParaMoeda(product.total)}</TableCell>
                      <TableCell align="right">{formatarParaMoeda(product.tax)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function SalesTable({ rows }: SalesTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ color: '#fff' }}>id</TableCell>
            <TableCell sx={{ color: '#fff' }} align="right">Total</TableCell>
            <TableCell sx={{ color: '#fff' }} align="right">Total em impostos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
