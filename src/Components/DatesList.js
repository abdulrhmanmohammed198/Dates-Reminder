import React from "react";
import { Col, Row } from "react-bootstrap";

export const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div className="d-flex border-bottom mx-3 my-2" key={item.id}>
                  <img alt="man" className="img-avatar" src={item.img} />
                  <div className="px-3">
                    <p className="d-inline fs-5"> {item.name}</p>
                    <p className="fs-6"> {item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">You Have No Appointments Today </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
