import React from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

type ItemDetailsProps = {
  itemId: number;
  getData: Function;
  getImageUrl: Function;
  renderItemDetails: Function;
};

type Item = { id: number; name: string };

type ItemDetailsState = {
  item: Item;
  itemImageUrl: string | undefined;
  loading: boolean;
  error: boolean;
};

class ItemDetails extends React.Component<ItemDetailsProps, ItemDetailsState> {
  state: ItemDetailsState = {
    item: {} as Item,
    itemImageUrl: undefined,
    loading: false,
    error: false,
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (itemId) {
      this.setState({ loading: true });
      getData(itemId)
        .then((item: Item) =>
          this.setState({
            item,
            itemImageUrl: getImageUrl(itemId),
            loading: false,
            error: false,
          })
        )
        .catch((e: object) => this.setState({ loading: false, error: true }));
    }
  }

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps: ItemDetailsProps) {
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
      <div className="w-80">
        <img className="w-72 h-72 mx-auto my-3" src={itemImageUrl} />
        <h5>{item.name}</h5>

        <div>{renderItemDetails(item)}</div>
        <div className="flex flex-row">
          <button>
            <a href={`${item?.id}`}>View details</a>
          </button>
          <button>
            <a href={`${item?.id}`}>Share</a>
          </button>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
