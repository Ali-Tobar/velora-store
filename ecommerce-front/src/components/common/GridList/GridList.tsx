import type { Key, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

// These props let the grid display different kinds of records.
type GridListProps<T> = {
  records: T[];
  // Get a unique key for each record.
  keyExtractor: (record: T) => Key;
  // Turn each record into the component to display.
  renderItem: (record: T) => ReactNode;
  // Use this message when the list is empty.
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
      {/* Show a message when there are no records. */}
      {records.length === 0 ? (
        <Col xs={12} className="text-center">
          {emptyMessage}
        </Col>
      ) : (
        /* Put each record in its own grid column. */
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