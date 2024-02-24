import ItemDetails from "../../../components/item-details";
import ItemList from "../../../components/item-list";
import { SwapiService } from "../../../services/old-pure-redux";
import {
  useGetPlanetByIDQuery,
  useGetAllPlanetsQuery,
} from "../../../services";

import React, { SetStateAction, useState, FC } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { getPlanetImageURL } from "../../../utils";

type PlanetsPageState = {
  itemId: number;
};

type PlanetsPageProps = {};

function PlanetsPage(props: PlanetsPageProps) {
  const [itemId, setItemId] = useState<number>(3);

  // setItemId = (id: number) => {
  //   console.log("id at PeoplePage:   ", id);
  //   return this.setState({ itemId: id });
  // };

  const renderItemDetails = (item: object) => {
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

  return (
    <div className="flex flex-row justify-between align-top">
      <div className="w-3/4 inline-block mx-0">
        <ItemList
          itemId={itemId}
          setItemId={setItemId}
          getData={useGetAllPlanetsQuery}
        />
      </div>
      <div className="w-1/4 inline-block mx-0">
        <ItemDetails
          itemId={itemId}
          getData={useGetPlanetByIDQuery}
          getImageUrl={getPlanetImageURL}
          renderItemDetails={renderItemDetails}
        />
      </div>
    </div>
  );
}

export default PlanetsPage;
