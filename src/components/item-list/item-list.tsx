import * as React from "react";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { getIdByUrl } from "../../utils";

// export default function SelectedListItem() {
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleListItemClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     index: number,
//   ) => {
//     setSelectedIndex(index);
//   };

//   <li key={item.id} className={`${itemId === item.id ? "active" : ""}`}>
//   <button onClick={(e) => setItemId(item.id)}>{item.name}</button>
// </li>

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

  // React.useEffect(() => {
  //   const { getData } = props;

  //   this.setState({ loading: true });
  //   getData()
  //     .then((items: object[]) =>
  //       this.setState({ items, loading: false, error: false })
  //     )
  //     .catch((e: object) => this.setState({ loading: false, error: true }));
  // }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  console.log("🚀 ~ ItemList ~ items:", items);

  return (
    <ul>
      {items.map((item: { url: string; name: string }) => {
        console.log("🚀 ~ item:", item);
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
