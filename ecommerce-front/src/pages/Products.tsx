import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { GridList,Heading } from "@components/common";
import { Loading } from "@components/feedback";
const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItem = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state)=> state.wishlist.itemsId)
  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItem[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id)
  }));
  useEffect(() => {
    // Fetch products when the category in the URL changes.
    if (!prefix) return;

    dispatch(actGetProductsByCatPrefix(prefix));

    return () => {
      // Clear products so they do not stay on the next page.
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Heading><span>{prefix}</span> Products</Heading>
      <Loading error={error} status={loading}>
        <GridList
          records={productFullInfo}
          keyExtractor={(record) => record.id}
          renderItem={(record) => <Product {...record} />}
          emptyMessage="There are no products"
        />
      </Loading>
    </Container>
  );
};

export default Products;
