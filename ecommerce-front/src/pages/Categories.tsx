import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { GridList, Heading } from "@components/common";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
const Categories = () => {
  const dispatch = useAppDispatch();
  // Get the categories and request status from Redux.
  const { records, loading, error } = useAppSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    // Load categories only when the list is empty.
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

  return (
    <Container>
      <Heading>Categories</Heading>
      {/* Show loading and error messages before the category list. */}
      <Loading error={error} status={loading}>
        <GridList
          records={records}
          keyExtractor={(record) => record.id ?? record.prefix}
          renderItem={(record) => <Category {...record} />}
          emptyMessage="There are no categories"
        />
      </Loading>
    </Container>
  );
};

export default Categories;
