import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";

import useCategories from "@hooks/useCategories";
const Categories = () => {
  const { error, loading, records } = useCategories();
  return (
    <Container>
      <Heading title="Categories" />
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
