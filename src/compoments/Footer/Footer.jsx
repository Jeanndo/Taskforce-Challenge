import React from 'react'
import { Row, Col } from "antd";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-reach-me">
              <div>
                  <h5 className="reach-me">REACH ME</h5>
              </div>
              <div>
                  <h5 className="email">
                   Email
                  </h5>
              </div>
              <div>
                  <h5 className="email-placeholder">
                    [ukwjeando@gmail.com]
                  </h5>
              </div>
              <div>
                  <h5 className="phone">
                   Phone
                  </h5>
              </div>
              <div>
                  <h5 className="phone-placeholder">
                   [0784860836]
                  </h5>
              </div>
              <div>
                  <h5 className="footer-profile">
                   Profile
                  </h5>
              </div>
              <div>
                  <h5 className="footer-profile-holder">
                   Profile Here
                  </h5>
              </div>
            </div>
            <div className="footer-dev-design">
            <Row gutter={0}>
            <Col className="gutter-row" span={12}>
            <div className="app-name">Developed by [JEAN DE DIEU UKWITEGETSE]</div>
            </Col>
            <Col className="gutter-row" span={12}>
            <div className="contact">Designed by Awesomity Lab</div>
            </Col>
            </Row>
            </div>
        </div>
    )
}

export default Footer
