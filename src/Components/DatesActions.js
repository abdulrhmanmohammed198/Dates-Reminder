import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export const DatesActions = ({ deleteData,onView }) => {
  return (
    <Row className="justify-content-center my-3 ">
      <Col sm="8" className="d-flex justify-content-between">
        <Button variant="danger" className="p-2" onClick={deleteData}>
          Delete All
        </Button>
        <Button variant="success" className="p-2" onClick={onView}>
          Show Data
        </Button>
      </Col>
    </Row>
  );
};
