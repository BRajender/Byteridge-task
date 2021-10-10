import React, { useEffect, useState } from "react";
import { Header } from "../../_components";
import { Container, Row, Col } from "react-bootstrap";

export const Dashboard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);
  return (
    <div>
      <Header />
      {user && (
        <Container claassName="mt-3">
          <Row>
            <Col md="4"></Col>
            <Col md="4">
              <p>Name:{`${user.firstName} ${user.lastName}`}</p>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
