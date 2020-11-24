import React from "react";
import { Row, Col } from "antd";

function Main() {
  return (
    <Row style={{ backgroundColor: "rgb(21, 32, 43)", height: "100vh" }}>
      <Col
        sm={2}
        md={8}
        lg={7}
        style={{ backgroundColor: "black", height: "100vh" }}
      ></Col>
      <Col
        sm={22}
        md={16}
        lg={10}
        style={{
          backgroundColor: "red",
          border: "1px solid #344048",
          borderTop: "none",
          height: "100vh",
        }}
      ></Col>
      <Col
        sm={0}
        md={0}
        lg={7}
        style={{ backgroundColor: "green", height: "100vh" }}
      ></Col>
    </Row>
  );
}

export default Main;
