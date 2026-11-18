import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

  return (
    <Container>
      <Row>
        {records.length === 0 ? (
          <Col xs={12} className="text-center">
            There are no categories
          </Col>
        ) : (
          records.map((record) => (
            <Col
              key={record.id ?? record.prefix}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category {...record} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Categories;
