import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class ItemDetails extends React.Component {
  state = {
    item: {},
    itemImageUrl: null,
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (itemId) {
      this.setState({ loading: true });
      getData(itemId)
        .then((item) =>
          this.setState({
            item,
            itemImageUrl: getImageUrl(itemId),
            loading: false,
            error: false,
          })
        )
        .catch((e) => this.setState({ loading: false, error: true }));
    }
  }

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    const { itemId, renderItemDetails = () => {} } = this.props;

    const { item, itemImageUrl, loading, error } = this.state;
    // console.log("itemId at ItemDetails:", itemId);
    // console.log("item:", item);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <Card sx={{ width: 320 }}>
        <CardMedia
          sx={{ width: 300, height: 300, my: 1, mx: "auto" }}
          image={itemImageUrl}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {renderItemDetails(item)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href={item?.id}>View details</Link>
          </Button>
          <Button size="small">
            <Link href={item?.id}>Share</Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ItemDetails;
