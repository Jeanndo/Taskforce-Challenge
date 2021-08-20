import React,{ useState } from 'react';
import { Row, Col} from 'antd';
import ReactFlagsSelect from 'react-flags-select';

const Form = () => {

    const [selected, setSelected] = useState('');

    return (
    <>
    {/* <form noValidate autoComplete="off">
        <div className="form-elements-outer-container container">
            <div className="form-elements-inner-container">
            <div className="country-selection">
            <ReactFlagsSelect
            className="countries"
            selected={selected}
            onSelect={code => setSelected(code)}
            />
            </div>
            <div className="calendar">
            <input type="Date" className="calendary"/>
            <button variant="contained" type="submit" className="submit-btn">Submit</button>
            </div>
            <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
            <h1 className="app-name">COVICALC</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
            <h1 className="contact">CONTACT</h1>
            </Grid>
            </Grid>
            </div>
        </div>
      </form> */
      }
    <form noValidate autoComplete="off">
      <Row gutter={0}>
      <Col className="gutter-row" span={12}>
      <ReactFlagsSelect
            className="countries"
            searchable
            selected={selected}
            onSelect={code => setSelected(code)}
            />
      </Col>
      <Col className="gutter-row" span={12}>
      <input type="Date" className="calendary"/>
      <button variant="contained" type="submit" className="submit-btn">Submit</button>
      </Col>
     
    </Row>
    </form>
      </>
    )
}

export default Form
