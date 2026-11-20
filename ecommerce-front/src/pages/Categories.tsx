import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { GridList } from "@components/common";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
const Categories = () => {
  const dispatch = useAppDispatch();
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
