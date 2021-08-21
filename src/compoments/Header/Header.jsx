import React from "react";
import { Row, Col } from "antd";
import Form from "./Form/Form";
import COVIVALICLOG from "../../Assets/covicalic.png";
import { connect } from "react-redux";
import { globaldataAction } from "../../redux/actions/globalCovidData";

const Header = ({ globaldataAction, globalData, countryData }) => {
  React.useEffect(() => {
    const fetchGlobalData = async () => {
      await globaldataAction();
    };
    fetchGlobalData();
  }, [globaldataAction]);

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
        <Col className="gutter-row" span={8}>
          <Form />
        </Col>
        <Col className="gutter-row" span={8}>
          {""}
        </Col>
      </Row>
      <div className="cumulatively">
        <div className="cumulativeData">
          {countryData
            ? countryData.message?.updated
            : globalData?.message?.updated}
        </div>
        <div className="cumulative-heading">Cumulatively</div>
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
