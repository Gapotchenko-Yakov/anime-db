import ItemDetails from "../../../item-details/item-details";
import ItemList from "../../../item-list";
import SwapiService from "../../../../services/old-pure-redux/swapi-service";
import React from "react";

type PlanetsPageProps = {};

type PlanetsPageState = {
  itemId: number;
};

interface IPlanetsPageState {
  itemId: number;
}

class PlanetsPage extends React.Component<PlanetsPageProps, PlanetsPageState> {
  state: PlanetsPageState = {
    itemId: 3,
  };

  swapiService = new SwapiService();
  setItemId = (id: number) => {
    console.log("id at PeoplePage:   ", id);
    return this.setState({ itemId: id });
  };

  renderItemDetails = (item: object) => {
    const rows = Object.entries(item);

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === "id" || rows[i][0] === "name") {
        rows.splice(i, 1);
        i--;
      }
    }

    return (
      <table>
        <tr>
          <th>Charasteristics</th>
          <th align="right">Value</th>
        </tr>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    const { itemId } = this.state;

    return (
      <div className="grid-cols-12">
        <div className="col-span-8">
          <ItemList
            itemId={this.state.itemId}
            setItemId={this.setItemId}
            getData={this.swapiService.getAllPlanets}
          />
        </div>
        <div className="col-span-3">
          <ItemDetails
            itemId={this.state.itemId}
            getData={this.swapiService.getPlanet}
            getImageUrl={this.swapiService.getPlanetImageURL}
            renderItemDetails={this.renderItemDetails}
          />
        </div>
      </div>
    );
  }
}

export default PlanetsPage;
