import * as React from "react";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

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

class ItemList extends React.Component<ItemListProps, ItemListState> {
  state = { items: [], loading: false, error: false };

  componentDidMount() {
    const { getData } = this.props;

    this.setState({ loading: true });
    getData()
      .then((items: object[]) =>
        this.setState({ items, loading: false, error: false })
      )
      .catch((e: object) => this.setState({ loading: false, error: true }));
  }

  render() {
    const { getData, itemId, setItemId } = this.props;
    const { items, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    console.log("items:   ", items);

    return (
      <ul>
        {items.map((item: { id: number; name: string }) => (
          <li
            key={item.id}
            onClick={(e) => setItemId(item.id)}
            className={`${itemId === item.id ? "bg-cyan-600" : "bg-cyan-300"}`}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
