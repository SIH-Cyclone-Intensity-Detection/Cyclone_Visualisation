
import Table            from '@mui/material/Table';
import TableBody        from '@mui/material/TableBody';
import TableCell        from '@mui/material/TableCell';
import TableContainer   from '@mui/material/TableContainer';
import TableHead        from '@mui/material/TableHead';
import TableRow         from '@mui/material/TableRow';
import Paper            from '@mui/material/Paper';

function Info(name, calories) {
  return { name, calories };
}

const rows = [
  Info('Start Date','2/2/2012' ),
  Info('End Date', '2/2/2012'),
  Info('Speed', 262),
  Info('Location', 'Bhopal'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{minHeight:'100%',backgroundColor:'#bdced9',border:'0.2px solid gray'}}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight:'700'}}>Amphan</TableCell>
            <TableCell ></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
