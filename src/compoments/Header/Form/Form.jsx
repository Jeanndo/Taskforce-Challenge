import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import ReactFlagsSelect from "react-flags-select";
import { connect } from "react-redux";
import { countryDataAction } from "../../../redux/actions/countryData";
import { countries } from "country-data";

const Form = ({ countryDataAction }) => {
  const [selected, setSelected] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState({ selectedDate: "" });

  useEffect(() => {
    const searchDatabyCountry = async () => {
      await countryDataAction(country);
    };
    searchDatabyCountry();
  }, [countryDataAction, country]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCountry(countries[`${selected}`].name);
  };

  // console.log(country);
  //  console.log(date?.selectedDate?.split("-"))

  //  const year =date?.selectedDate?.split("-")[0];
  //  const month=date?.selectedDate?.split("-")[1];
  //  const day=date?.selectedDate?.split("-")[2];
  //  const monthSbstr=month?.split('')[1];
  //  const yearSubstr =year?.split('0')[1];

  //  console.log(monthSbstr+"/"+day+"/"+yearSubstr);

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Row>
          <Col className="gutter-row" span={24}>
            <div className="inner-form-container">
              <ReactFlagsSelect
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
              <button variant="contained" type="submit" className="submit-btn">
                SUBMIT
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};
const mapStateToprops = ({ countryDataReducer }) => {
  const { countryData } = countryDataReducer;
  return { countryData };
};
export default connect(mapStateToprops, { countryDataAction })(Form);
