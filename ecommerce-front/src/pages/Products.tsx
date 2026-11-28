import useProducts from "@hooks/useProducts";
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
const Products = () => {
 
const {prefix,error,loading,productFullInfo} = useProducts()
  return (
    <Container>
      <Heading title={`${prefix} Products`} />
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
