import ItemDetails from "../../../item-details/item-details";
import ItemList from "../../../item-list";
import SwapiService from "../../../../services/swapi-service";
import React from "react";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

class PlanetsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: 3,
    };
  }

  swapiService = new SwapiService();
  setItemId = (id) => {
    console.log("id at PeoplePage:   ", id);
    return this.setState({ itemId: id });
  };

  renderItemDetails = (item) => {
    const rows = Object.entries(item);

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === "id" || rows[i][0] === "name") {
        rows.splice(i, 1);
        i--;
      }
    }

    return (
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small" aria-label="characheristics of planets">
          <TableHead>
            <TableRow>
              <TableCell>Charasteristics</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row[0]}
                hover
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell align="right">{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  render() {
    return (
      <Grid container>
        <Grid item md={8}>
          <ItemList
            itemId={this.state.itemId}
            setItemId={this.setItemId}
            getData={this.swapiService.getAllPlanets}
          />
        </Grid>
        <Grid item md={3}>
          <ItemDetails
            itemId={this.state.itemId}
            getData={this.swapiService.getPlanet}
            getImageUrl={this.swapiService.getPlanetImageURL}
            renderItemDetails={this.renderItemDetails}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PlanetsPage;
