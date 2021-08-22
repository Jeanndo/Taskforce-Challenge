import React from "react";
/**
 * @function Card
 * @param {*} continentdata a state wich stores data of a given continent.
 * @returns A card which is used to display data in a slideshow.
 */
const Card = ({ continentdata }) => {
  return (
    <>
      <div className="slide-card">
        <div className="left-card-contents">
          <div className="continent">{continentdata?.continent}</div>
          <div className="continent-casses">{continentdata?.todayCases}</div>
          <div className="continent-cases-labels">new cases</div>
          <div className="all-cases">All Cases: {continentdata?.cases}</div>
        </div>
        <div className="sub-card">
          <div className="new-deaths">{continentdata?.todayDeaths}</div>
          <div className="new-deaths-label">New deaths</div>
          <div className="total-deaths">
            Total deaths:{continentdata?.deaths}
          </div>
          <div className="newly-recovered">{continentdata?.todayRecovered}</div>
          <div className="newly-recoverd-label">Newly Recovered</div>
          <div className="total-recovered">
            Total recovered:: {continentdata?.recovered}
          </div>
          <div className="new-vaccinated">1878564</div>
          <div className="new-vaccinated-label">New Vaccinated</div>
          <div className="total-vaccinated">Total vaccinated:14,784254</div>
        </div>
      </div>
    </>
  );
};

export default Card;
