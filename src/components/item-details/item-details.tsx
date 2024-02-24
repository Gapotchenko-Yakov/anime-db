import React, { useEffect, useState } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { useGetAllPlanetsQuery } from "../../services";

type ItemDetailsProps = {
  itemId: number;
  getData: Function;
  getImageUrl: Function;
  renderItemDetails: Function;
};

type Item = { id: number; name: string };

const ItemDetails = (props: ItemDetailsProps) => {
  const { itemId, renderItemDetails = () => {}, getData, getImageUrl } = props;
  // const [item, setItem] = useState<Item>({} as Item);
  const [itemImageUrl, setItemImageUrl] = useState<string | undefined>(
    undefined
  );

  const { data: item = {}, error, loading } = getData(itemId);
  console.log("🚀 ~ ItemDetails ~ item:", item);

  useEffect(() => {
    setItemImageUrl(getImageUrl(itemId));
    // setItem(data);
  }, [itemId]);

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
};

export default ItemDetails;

// updateItem() {
//   const { itemId, getData, getImageUrl } = props;

//   if (itemId) {
//     this.setState({ loading: true });
//     getData(itemId)
//       .then((item: Item) =>
//         this.setState({
//           item,
//           itemImageUrl: getImageUrl(itemId),
//           loading: false,
//           error: false,
//         })
//       )
//       .catch((e: object) => this.setState({ loading: false, error: true }));
//   }
// }
