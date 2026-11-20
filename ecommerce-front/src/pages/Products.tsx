import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { GridList } from "@components/common";
import { Loading } from "@components/feedback";
const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

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
      <Loading error={error} status={loading}>
        <GridList
          records={records}
          keyExtractor={(record) => record.id}
          renderItem={(record) => <Product {...record} />}
          emptyMessage="There are no products"
        />
      </Loading>
    </Container>
  );
};

export default Products;
