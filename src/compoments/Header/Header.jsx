import React from "react";
import { Row, Col } from "antd";
import Form from "./Form/Form";

const style={backgroundColor:'blue'};

const Header = () => {
  return (
    <div className="header">
      <Row gutter={0}>
        <Col className="gutter-row" span={12}>
          <div className="app-name">COVICALC</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="contact">
           <h5 className="contact-heading"> CONTACT</h5>
            </div>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={24}>
          <div>
            <h1 className="updates-heading">UPDATES</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={24}>
          <h6 className="country-search-label" style={{ textAlign: "center" }}>
            Search a country
          </h6>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col className="gutter-row" span={8}>
          {""}
        </Col>
        <Col className="gutter-row" span={8}>
          <Form />
        </Col>
        <Col className="gutter-row" span={8}>
          {""}
        </Col>
      </Row>
        <div className="cumulatively">
        <div style={style}>2,188,881</div>
        </div>
    </div>
  );
};

export default Header;
