import ItemDetails from "../../../components/item-details";
import ItemList from "../../../components/item-list";
import {
  useGetStarshipByIDQuery,
  useGetAllStarshipsQuery,
} from "../../../components/store/api";

import { useState } from "react";
import { getStarshipImageURL } from "../../../utils";

function StarshipsPage() {
  const [itemId, setItemId] = useState<number>(3);

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
          getData={useGetAllStarshipsQuery}
        />
      </div>
      <div className="w-1/4 inline-block mx-0">
        <ItemDetails
          itemId={itemId}
          getData={useGetStarshipByIDQuery}
          getImageUrl={getStarshipImageURL}
          renderItemDetails={renderItemDetails}
        />
      </div>
    </div>
  );
}

export default StarshipsPage;
