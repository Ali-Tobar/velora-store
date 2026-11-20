import type { Key, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  keyExtractor: (record: T) => Key;
  renderItem: (record: T) => ReactNode;
  emptyMessage?: string;
};

const GridList = <T,>({
  records,
  keyExtractor,
  renderItem,
  emptyMessage = "There are no records",
}: GridListProps<T>) => {
  return (
    <Row>
      {records.length === 0 ? (
        <Col xs={12} className="text-center">
          {emptyMessage}
        </Col>
      ) : (
        records.map((record) => (
          <Col
            key={keyExtractor(record)}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      )}
    </Row>
  );
};

export default GridList;