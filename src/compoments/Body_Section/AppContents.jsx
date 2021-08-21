import React from "react";
import { connect } from "react-redux";
import SlideShow from "./Slideshow";
import { globaldataAction } from "../../redux/actions/globalCovidData";

const AppContents = ({ globaldataAction, globalData, countryData }) => {
  React.useEffect(() => {
    const fetchGlobalData = async () => {
      await globaldataAction();
    };

    fetchGlobalData();
  }, [globaldataAction]);

  return (
    <div className="covid-data-display-container">
      <div className="covid-data">
        <div className="covid-data-card-container">
          <div className="cov-data-card">
            <div className="cov-data-box1">
              {countryData
                ? countryData?.message?.testsPerOneMillion
                : globalData?.message?.testsPerOneMillion}
            </div>
            <div className="cov-data-box2">Tests</div>
            <div className="cov-data-box3">
              {countryData
                ? countryData?.message?.tests
                : globalData?.message?.tests}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {countryData
                ? countryData?.message?.cases
                : globalData?.message?.cases}
            </div>
            <div className="cov-data-box2">Positive cases</div>
            <div className="cov-data-box3">
              {countryData
                ? countryData?.message?.casesPerOneMillion
                : globalData?.message?.casesPerOneMillion}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {countryData
                ? countryData?.message?.criticalPerOneMillion
                : globalData?.message?.criticalPerOneMillion}
            </div>
            <div className="cov-data-box2">Hospitalized</div>
            <div className="cov-data-box3">
              {countryData
                ? countryData?.message?.critical
                : globalData?.message?.critical}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {countryData
                ? countryData?.message?.recoveredPerOneMillion
                : globalData?.message?.recoveredPerOneMillion}
            </div>
            <div className="cov-data-box2">Recovered</div>
            <div className="cov-data-box3">
              {countryData
                ? countryData?.message?.recovered
                : globalData?.message?.recovered}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {countryData
                ? countryData?.message?.todayDeaths
                : globalData?.message?.todayDeaths}
            </div>
            <div className="cov-data-box2">Deaths</div>
            <div className="cov-data-box3">
              {countryData
                ? countryData?.message?.deaths
                : globalData?.message?.deaths}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">1233</div>
            <div className="cov-data-box2">Vaccinated</div>
            <div className="cov-data-box3">123444</div>
          </div>
        </div>
      </div>
      <div className="per-continets">PER CONTINENTS</div>
      <SlideShow />
    </div>
  );
};
const mapStateToprops = ({ globalDataReducer, countryDataReducer }) => {
  const { globalData } = globalDataReducer;
  const { countryData } = countryDataReducer;
  return { globalData, countryData };
};
export default connect(mapStateToprops, { globaldataAction })(AppContents);
