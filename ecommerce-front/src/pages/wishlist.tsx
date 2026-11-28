import useWishlist from "@hooks/useWishlist";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import type { TProduct } from "@customTypes/index";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();
  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error}>
        {/* Use each product ID as a stable key in the list. */}
        <GridList<TProduct>
          records={records}
          keyExtractor={(record) => record.id}
          renderItem={(record) => <Product {...record} />}
          emptyMessage="Your wishlist is empty"
        />
      </Loading>
    </>
  );
};

export default Wishlist;
