import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const OffertsWidget = () => {
  return (
    <section className="w-[98vw] rounded-md p-[2rem] h-[35rem] justify-center ml-[1vw] mr-[1vw] mt-[1rem] bg-[white]">
      <article className="flex flex-row items-center">
        <h1 className="text-3xl font-bold mr-[2rem]">Offerts</h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            defaultValue={10}
            labelId="demo-select-small"
            id="demo-select-small"
          >
            <MenuItem value={10}>Most Popular</MenuItem>
            <MenuItem value={20}>Least Popular</MenuItem>
          </Select>
        </FormControl>
      </article>
      <article className="flex items-center justify-center h-[90%]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="bg-[#023E8A] w-[25%]" align="center">
                  <h1 className="font-bold text-[white]">Name</h1>
                </TableCell>
                <TableCell className="bg-[#023E8A] w-[25%]" align="center">
                  <h1 className="font-bold text-[white]">Foto</h1>
                </TableCell>
                <TableCell className="bg-[#023E8A] w-[25%]" align="center">
                  <h1 className="font-bold text-[white]">Sold item</h1>
                </TableCell>
                <TableCell className="bg-[#023E8A] " align="center">
                  <h1 className="font-bold text-[white]">Cycle</h1>
                </TableCell>
                <TableCell className="bg-[#023E8A] " align="center">
                  <h1 className="font-bold text-[white]"></h1>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </article>
    </section>
  );
};

export default OffertsWidget;
