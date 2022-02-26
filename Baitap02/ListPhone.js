import React, { Component } from "react";
import ItemPhone from "./ItemPhone";

export default class ListPhone extends Component {
  renderPhone = () => {
    let { phones, chiTiet, themSP} = this.props;
    return phones.map((phone, index) => {
      return <ItemPhone spThem={themSP} xemCT={chiTiet} phone={phone} key={index} />;
    });
  };

  render() {
    return <div className="row">{this.renderPhone()}</div>;
  }
}
