import React from "react";
import { Row, Col } from "antd";
import Form from "./Form/Form";
import COVIVALICLOG from "../../Assets/covicalic.png";
import { connect } from "react-redux";
import { globaldataAction } from "../../redux/actions/globalCovidData";

/**
 * @function Header
 * @param {*} countryData A state which stores data of a specific country.
 * @returns Acomponent which render accumulative data about covid-19.
 * Returns a compment which displays main header elements of app.
 */

const Header = ({ countryData }) => {
  const DUMMYUPDATES = 1234456566;
  return (
    <div className="header">
      <div className="nav-bar">
        <Row gutter={0}>
          <Col className="gutter-row" span={12}>
            <div className="app-name">
              <img src={COVIVALICLOG} alt="logo" />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="contact">CONTACT</div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col className="gutter-row" span={24}>
          <div className="updates">UPDATES</div>
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
        <Col className="gutter-row form-container-col" span={8}>
          <Form />
        </Col>
        <Col className="gutter-row" span={8}>
          {""}
        </Col>
      </Row>
      <div className="cumulatively">
        <div className="cumulativeData">
          {countryData ? countryData.message?.updated : DUMMYUPDATES}
        </div>
        <div className="cumulative-heading">
          <p>Cumulatively</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = ({ globalDataReducer, countryDataReducer }) => {
  const { globalData } = globalDataReducer;
  const { countryData } = countryDataReducer;
  return { globalData, countryData };
};
export default connect(mapStateToprops, { globaldataAction })(Header);
