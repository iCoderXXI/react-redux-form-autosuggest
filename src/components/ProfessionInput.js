import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProfessionFld from '../containers/Profession/ProfessionFld';
import ProfessionsSuggest from '../containers/Profession/ProfessionsSuggest';

const colDimensions = {
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12
}

export default class ProfessionInput extends Component {
  render() {
    const professions = this.props.listShow ? <ProfessionsSuggest /> : null;
    return (
      <Row>
        <Col { ...colDimensions }>
          <ProfessionFld className="profession-fld"/>
          {professions}
        </Col>
      </Row>
    )
  }
}

// export default ProfessionInput;
