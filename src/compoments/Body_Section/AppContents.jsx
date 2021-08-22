import React from "react";
import { connect } from "react-redux";
import SlideShow from "./Slideshow";
import { globaldataAction } from "../../redux/actions/globalCovidData";

const AppContents = ({countryData,historicalData}) => {

  console.log(historicalData?.message);
  console.log(historicalData?.message?.data);
  console.log(historicalData?.message?.selectedDate);

  const date = historicalData?.message?.selectedDate;

   const cases = historicalData?.message?.data?.cases[date]

   const deaths = historicalData?.message?.data?.deaths[date];
   const recovered = historicalData?.message?.data?.recovered[date];
   const dummytests=123;
   const dummyHospitalized=123;

  console.log(cases,deaths,recovered);
  return (
    <div className="covid-data-display-container">
      <div className="covid-data">
        <div className="covid-data-card-container">
          <div className="cov-data-card">
            <div className="cov-data-box1">
              {dummytests?dummytests:countryData?.message?.testsPerOneMillion}
            </div>
            <div className="cov-data-box2">Tests</div>
            <div className="cov-data-box3">
            {dummytests?dummytests:countryData?.message?.tests}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {cases?cases:countryData?.message?.cases}
            </div>
            <div className="cov-data-box2">Positive cases</div>
            <div className="cov-data-box3">
              {cases?cases:countryData?.message?.casesPerOneMillion}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {dummyHospitalized?dummyHospitalized:countryData?.message?.criticalPerOneMillion}
            </div>
            <div className="cov-data-box2">Hospitalized</div>
            <div className="cov-data-box3">
              {dummyHospitalized?dummyHospitalized:countryData?.message?.critical}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {recovered?recovered:countryData?.message?.recoveredPerOneMillion} 
            </div>
            <div className="cov-data-box2">Recovered</div>
            <div className="cov-data-box3">
              {recovered?recovered:countryData?.message?.recovered}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">
              {deaths?deaths:countryData?.message?.todayDeaths}
            </div>
            <div className="cov-data-box2">Deaths</div>
            <div className="cov-data-box3">
              {deaths?deaths:countryData?.message?.deaths}
            </div>
          </div>

          <div className="cov-data-card">
            <div className="cov-data-box1">{countryData?.vaccinatedPerOneMillion?countryData?.message?.vaccinatedPerOneMillion:0}</div>
            <div className="cov-data-box2">Vaccinated</div>
            <div className="cov-data-box3">{countryData?.vaccinated?countryData?.message?.vaccinated:0}</div>
          </div>
        </div>
      </div>
      <div className="per-continets">PER CONTINENTS</div>
      <SlideShow />
    </div>
  );
};
const mapStateToprops = ({countryDataReducer,historicalReducer}) => {
  const { countryData } = countryDataReducer;
  const {historicalData}=historicalReducer;

  return {countryData,historicalData};
};
export default connect(mapStateToprops, { globaldataAction })(AppContents);
