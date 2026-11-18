import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";

const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (!prefix) return;

    dispatch(actGetProductsByCatPrefix(prefix));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  const productsList =
    loading === "idle" || loading === "pending" ? (
      <Col xs={12} className="text-center">
        Loading products...
      </Col>
    ) : error ? (
      <Col xs={12} className="text-center">
        {error}
      </Col>
    ) : records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <Product {...record} />
        </Col>
      ))
    ) : (
      <Col xs={12} className="text-center">
        There are no products
      </Col>
    );

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
