import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { connect } from "react-redux";
import { countryDataAction } from "../../../redux/actions/countryData";
import { historicalDataByCountry } from "../../../redux/actions/HistoricalData";
import { countries } from "country-data";

/**
 * @function Form
 * @param {*} countryDataAction An action creator which fetch data by country name.
 * @param {*} historicalDataByCountry An action creator which fetch historical data by country name.
 * @returns A form from our action creators will country name for fetching data for that country.
 */

const Form = ({ countryDataAction, historicalDataByCountry }) => {
  const [selected, setSelected] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState({ selectedDate: "" });
  //const [style,setStyle]= useState("validationerror");

  let formatedDate;

  useEffect(() => {
    const searchDatabyCountry = async () => {
      if (date.selectedDate) {
        await historicalDataByCountry(country, formatedDate);
      } else {
        await countryDataAction(country);
      }
    };
    searchDatabyCountry();
  }, [
    countryDataAction,
    country,
    historicalDataByCountry,
    date.selectedDate,
    formatedDate,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCountry(countries[`${selected}`].name);
    // if(country) setStyle('onFormValid')
  };

  const year = date?.selectedDate?.split("-")[0];
  const month = date?.selectedDate?.split("-")[1];
  const day = date?.selectedDate?.split("-")[2];
  const monthSbstr = month?.split("")[1];
  const yearSubstr = year?.split("0")[1];

  formatedDate = monthSbstr + "/" + day + "/" + yearSubstr;

  console.log(monthSbstr + "/" + day + "/" + yearSubstr);

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={"onFormValid"}
      >
        <div className="inner-form-container">
          <ReactFlagsSelect
            searchPlaceholder="Search"
            className="countries"
            searchable
            selected={selected}
            onSelect={(code) => setSelected(code)}
          />

          <input
            type="Date"
            className="calendary"
            value={date.selectedDate}
            onChange={(event) =>
              setDate({ ...date, selectedDate: event.target.value })
            }
          />
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};
const mapStateToprops = ({ countryDataReducer, historicalReducer }) => {
  const { countryData } = countryDataReducer;
  const { historicalData } = historicalReducer;
  return { countryData, historicalData };
};
export default connect(mapStateToprops, {
  countryDataAction,
  historicalDataByCountry,
})(Form);
