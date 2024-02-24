import * as React from "react";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { getIdByUrl } from "../../utils";

type ItemListProps = {
  itemId: number;
  setItemId: Function;
  getData: Function;
};

type ItemListState = {
  items: object[];
  loading: boolean;
  error: boolean;
};

const ItemList = (props: ItemListProps) => {
  const { getData, itemId, setItemId } = props;

  const { data: { results: items = [] } = {}, isLoading, error } = getData();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <ul>
      {items.map((item: { url: string; name: string }) => {
        const id = getIdByUrl(item.url);

        return (
          <li
            key={id}
            onClick={(e) => setItemId(id)}
            className={`${itemId === id ? "bg-cyan-600" : "bg-cyan-300"}`}
          >
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
