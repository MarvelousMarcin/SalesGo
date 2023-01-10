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
import { displayValue } from "../../../../store/languageSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const OffertsWidget = ({ offerts }) => {
  const dispatch = useDispatch();
  const [sortingType, setSortingType] = useState("Most popular");
  const [offert, setOfferts] = useState(() => {
    return offerts?.sort((a, b) => b.sold - a.sold);
  });

  useEffect(() => {
    setOfferts(offerts?.sort((a, b) => b.sold - a.sold));
  }, [offerts]);

  return (
    <motion.section
      animate={{ opacity: [0, 1] }}
      className="w-[98vw] rounded-md p-[2rem] shadow-md h-[50rem] justify-center ml-[1vw] mr-[1vw] mt-[1rem] bg-[white] dark:bg-[#242526]"
    >
      <article className="flex flex-row items-center">
        <h1 className="text-3xl font-bold mr-[2rem] dark:text-[white]">
          {dispatch(displayValue("Offerts"))}
        </h1>
        <FormControl
          sx={{ m: 1, minWidth: 120, color: "#242526" }}
          size="small"
        >
          <Select
            defaultValue={"Most Popular"}
            className="dark:text-[white] border-[white] border-[2px]"
            onChange={(e) => {
              setSortingType(e.target.value);
              if (e.target.value === "Most Popular") {
                offerts.sort((a, b) => b.sold - a.sold);
                setOfferts(offerts);
              } else {
                offerts.sort((a, b) => a.sold - b.sold);
                setOfferts(offerts);
              }
            }}
          >
            <MenuItem value={"Most Popular"}>
              <span>{dispatch(displayValue("Most Popular"))}</span>
            </MenuItem>
            <MenuItem value={"Least Popular"}>
              <span>{dispatch(displayValue("Least Popular"))}</span>
            </MenuItem>
          </Select>
        </FormControl>
      </article>
      {offerts.length === 0 && (
        <div className="flex items-center justify-center h-[80%] text-3xl dark:text-[white]">
          {dispatch(displayValue("No avaiable offerts to show."))}
        </div>
      )}
      {offerts && (
        <motion.article className="flex items-center justify-center h-[90%]">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="bg-[#023E8A] w-[25%]" align="left">
                    <h1 className="font-bold text-[white]">
                      {dispatch(displayValue("Name"))}
                    </h1>
                  </TableCell>
                  <TableCell className="bg-[#023E8A] w-[25%]" align="left">
                    <h1 className="font-bold text-[white]">
                      {dispatch(displayValue("Foto"))}
                    </h1>
                  </TableCell>
                  <TableCell className="bg-[#023E8A] w-[25%]" align="left">
                    <h1 className="font-bold text-[white]">
                      {dispatch(displayValue("Sold items"))}
                    </h1>
                  </TableCell>
                  <TableCell className="bg-[#023E8A] " align="left">
                    <h1 className="font-bold text-[white]">
                      {sortingType === "Most Popular"
                        ? dispatch(displayValue("Cycle"))
                        : dispatch(displayValue("Unique Views"))}
                    </h1>
                  </TableCell>
                  <TableCell className="bg-[#023E8A] " align="left">
                    <div className="font-bold text-[white]"></div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {offert.slice(0, 5).map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className="dark:bg-[#242526] dark:text-[white]"
                      component="th"
                      scope="row"
                      align="left"
                    >
                      <div className="font-bold">{row.name}</div>
                    </TableCell>
                    <TableCell
                      className="dark:bg-[#242526] dark:text-[white] flex"
                      align="left"
                    >
                      <img
                        className="w-[4rem] items-center justify-center"
                        src={row.foto}
                      />
                    </TableCell>
                    <TableCell
                      className="dark:bg-[#242526] dark:text-[white]"
                      align="left"
                    >
                      {row.sold}
                    </TableCell>
                    <TableCell
                      className="dark:bg-[#242526] dark:text-[white]"
                      align="left"
                    >
                      {sortingType === "Most Popular"
                        ? row.rotation
                        : row.views}
                    </TableCell>
                    <TableCell
                      className="dark:bg-[#242526] dark:text-[white]"
                      align="left"
                    ></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.article>
      )}
    </motion.section>
  );
};

export default OffertsWidget;
