import React from "react";
import { Row, Col } from "antd";

/**
 * @function Footer 
 * @returns A compnents which displays footer elemements.
 */

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-reach-me">
        <div className="reach-me">REACH ME</div>
        <div className="email">Email</div>
        <div className="email-placeholder">[ukwjeandedieu1@gmail.com]</div>
        <div className="phone">Phone</div>
        <div className="phone-placeholder">[0784860836]</div>
        <div className="footer-profile">Profile</div>
        <div className="footer-profile-holder">
          [https://github.com/Jeanndo/]
        </div>
      </div>
      <div className="footer-dev-design">
        <Row gutter={0}>
          <Col className="gutter-row" span={12}>
            <div className="developed-by">
              Developed by [
              <b className="developer-name">JEAN DE DIEU UKWITEGETSE</b>]
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="desgined-by">
              Designed by <b className="designer-name">Awesomity Lab</b>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
