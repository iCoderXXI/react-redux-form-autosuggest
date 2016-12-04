import React, { Component } from 'react';
import {
  DropdownButton,
  MenuItem,
  InputGroup
} from 'react-bootstrap';
import Flag from "react-flags";

const flag = (code = "RU") => {
  return (
    <div className="flag-container">
      <Flag
        name={code}
        format="png"
        pngSize={24}
        shiny={true}
      />
    </div>
  )
}

const countryList = (list = {}, clickHandler, that) => {
  const ret = [];
  for(let code in list) {
    if (true) {
      ret.push(
        (
          <MenuItem
            key={code}
            onClick={clickHandler.bind(that, code)}
          >
            {flag(code)} {list[code].countryName}
          </MenuItem>
        )
      )
    }
  }
  return ret;
}

export default class CountryList extends Component {

  changeCountry(code) {
    console.log('Country changed to',code);
    if (typeof this.props.countryChange === "function") {
      this.props.countryChange(code)
    } else {
      console.error('this.props.countryChange handler not defined for CountryList component');
    }
  }

  render() {

    return (
      <DropdownButton
        bsSize="large"
        componentClass={InputGroup.Button}
        id="input-dropdown-addon"
        title={flag(this.props.countryId || 'RU')}
        bsStyle={this.props.error ? "danger" : "default"}
      >
        {
          countryList(
            this.props.list,
            this.changeCountry,
            this
          )
        }
      </DropdownButton>
    )
  }
}
