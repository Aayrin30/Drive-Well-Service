import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({appointment}) => {
  console.log(appointment);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">userId</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Vehicle Number</TableCell>
            <TableCell className="tableCell">Appointment Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointment.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell" style={{width:"400px"}} >{row.id}</TableCell>
              <TableCell className="tableCell" style={{width:"400px"}} >{row.userId}</TableCell>
              <TableCell className="tableCell" style={{width:"400px"}} >{row.firstName +' ' +row.lastName}</TableCell>
              <TableCell className="tableCell" style={{width:"400px"}} >{row.vehicleNumber}</TableCell>
              <TableCell className="tableCell" style={{width:"400px"}} >{row.appointmentDate}</TableCell>
              <TableCell className="tableCell" style={{width:"400px"}} >
                <span className={`status ${row.status ? "Approved" : "Pending"}`}>{row.status ? 'COMPLETED' : 'IN PROGRESS'}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
