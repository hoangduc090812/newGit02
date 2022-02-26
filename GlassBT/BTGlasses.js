import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class BTGlasses extends Component {
  renderGlassseList = () => {
    return dataGlasses.map((glass, index) => {
      //  console.log(glass);
      return (
        <img
          onClick={() => {
            this.changeGlasses(glass);
          }}
          className="ml-2 p-2 border border-width-1"
          key={index}
          style={{ width: "115px", cursor: "pointer" }}
          src={glass.url}
          alt="..."
        />
      );
    });
  };
  state = {
    glassesTry: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (newGlasses) => {
    // console.log(newGlasses);
    this.setState({
      glassesTry: newGlasses,
    });
  };

  render() {
    const keyframe = `@keyframes animationGlasses${Date.now()} {
        from {
            width: 0;
            opacity: .2;
            transform: rotate(45deg);
        }
        to {
            width: 142px;
            opacity: .8;
            transform: rotate(0deg);
        }
      }`;
    const glasseTry = {
      width: "142px",
      right: "74px",
      top: "75px",
      opacity: ".8",
      transform: 'rotate(0deg)',
      animation: `animationGlasses${Date.now()} 1s`,
    //   animationDuration: '',

    };
    const infoGlasses = {
      width: "250px",
      left: "270px",
      top: "200px",
      textAlign: "left",
      height: "105px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255, 193, 37,.3)",
    };
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "1600px",
          minHeight: "2000px",
        }}
      >
          <style>
              {keyframe}
          </style>
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
          <h3
            style={{ backgroundColor: "rgba(151, 255, 255,.5)" }}
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
                    src="./glassesImage/z2974976644416_f248b61cec26c968d5ced519e3313bcc.jpg"
                    alt="..."
                  />
                  <img
                    className="position-absolute"
                    style={glasseTry}
                    src={this.state.glassesTry.url}
                    alt="..."
                  />
                  <div style={infoGlasses} className="position-relative">
                    <span
                      style={{ fontSize: "20px", color: "#97FFFF" }}
                      className="font-weight-bold"
                    >
                      {this.state.glassesTry.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      {this.state.glassesTry.desc}
                    </span>
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
          <div className="bg-light text-center container d-flex justify-content-center mt-5 p-5 ">
            {this.renderGlassseList()}
          </div>
        </div>
      </div>
    );
  }
}
