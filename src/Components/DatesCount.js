import React from "react";
import { Col, Row } from "react-bootstrap";

export const DatesCount = ({ count }) => {
  return (
    <Row className="justify-content-center px-3 mt-2 ">
      <Col sm="8" className="">
        You Have {count} Appointment/s Today
      </Col>
    </Row>
  );
};
