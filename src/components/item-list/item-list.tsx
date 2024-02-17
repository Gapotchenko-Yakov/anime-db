import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
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

class ItemList extends React.Component {
  state = { items: [], loading: false, error: false };

  componentDidMount() {
    const { getData } = this.props;

    this.setState({ loading: true });
    getData()
      .then((items) => this.setState({ items, loading: false, error: false }))
      .catch((e) => this.setState({ loading: false, error: true }));
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
      <Box
        sx={{
          width: "80%",
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        <List component="nav" aria-label="planets list">
          {items.map((item) => (
            <ListItemButton
              key={item.id}
              selected={itemId === item.id}
              onClick={(e) => setItemId(item.id)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    );
  }
}

export default ItemList;
