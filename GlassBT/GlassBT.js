import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
// import'./BTTryGlass.css';

export default class GlassBT extends Component {

  renderGlasses = () => {
    return dataGlasses.map((glassesItem, index) => {
      return <img onClick={() => {
        this.changeGlasses(glassesItem)
      }} style={{width:'110px', cursor:'pointer'}} className="ml-2 p-2 border border-width-1" src={glassesItem.url} alt="..."/>
    })
  }
  
  state={
    glassSelect:{
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
  }

  changeGlasses = (newGlasses) => {
    this.setState({
      glassSelect: newGlasses
    })
  }

  
  
  render() {

    const keyframes=`@keyframes animchangeGlass${Date.now()} {
      from{
          width:0;
          transform: rotate(45deg);
          opacity: 0;
      }
      to{
          width:150px;
          transform: rotate(0deg);
          opacity:0.7
      }
  }`
    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: "0.7",
      // transform: 'rotate(0deg)',
      animation: `animchangeGlass${Date.now()} 2s`

    };
    const infoGlasse={
        width: '250px',
        left: '270px',
        top: '201px',
        textAlign: 'left',
        backgroundColor: 'rgba(255,127, 0,.5)',
        height: '104px',
        paddingLeft: '15px',
    }
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "1600px",
          minHeight: "2000px",
        }}
      >
        <style>
          {keyframes}
        </style>
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
          <h3
            style={{ backgroundColor: "rgba(105, 89, 205,.8)" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="..."
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute glassesStyle"
                    src={this.state.glassSelect.url}
                    alt="..."
                  />
                  <div style={infoGlasse} className="position-relative">
                    <span style={{color:'#009933', fontSize:"18px"}} className="font-weight-bold">{this.state.glassSelect.name}</span>
                    <br/>
                    <span style={{fontSize:"13px", fontWeight:"500"}} >{this.state.glassSelect.desc}</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center d-flex mt-5 justify-content-center p-5"> 
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
