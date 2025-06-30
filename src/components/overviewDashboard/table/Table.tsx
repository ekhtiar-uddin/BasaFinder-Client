import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import "./table.scss";

const List = () => {
  const rows = [
    {
      id: 1143155,
      property: "Sunny Hill Apartment",
      img: "https://images.unsplash.com/photo-1595526114035-0d6d01ae1b5d?auto=format&fit=crop&w=600&q=80",
      tenant: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      property: "Downtown Studio Loft",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      tenant: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      property: "Lakeview Condo",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      tenant: "Sarah Lee",
      date: "1 March",
      amount: 1200,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      property: "Greenfield Villa",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
      tenant: "Jane Smith",
      date: "1 March",
      amount: 1500,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      property: "City Center Penthouse",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
      tenant: "Harold Carol",
      date: "1 March",
      amount: 2200,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Property</TableCell>
            <TableCell className="tableCell">Tenant</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <Image
                    src={row.img}
                    width={50}
                    alt=""
                    height={50}
                    className=" rounded-lg"
                  />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.tenant}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">${row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
