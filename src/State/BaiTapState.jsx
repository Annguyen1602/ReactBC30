import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg",
    fSize: 16, // bắt buộc phải có giá trị mặc định
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập 1: Bài tập chọn màu xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} alt="..." />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                //Thay đổi hình
                this.setState({
                  imgSrc: "./img/products/red-car.jpg",
                });
              }}
            >
              {" "}
              Red
            </button>
            <button
              className="btn btn-dark m-2"
              onClick={() => {
                //Thay đổi hình
                this.setState({
                  imgSrc: "./img/products/black-car.jpg",
                });
              }}
            >
              {" "}
              Black
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                //Thay đổi hình
                this.setState({
                  imgSrc: "./img/products/silver-car.jpg",
                });
              }}
            >
              {" "}
              Silver
            </button>
            <button
              className="btn btn-default m-2 border"
              onClick={() => {
                //Thay đổi hình
                this.setState({
                  imgSrc: "./img/products/steel-car.jpg",
                });
              }}
            >
              {" "}
              Steel
            </button>
          </div>
        </div>
        <hr />
        <h3>Bài tập 2: Tăng giảm font-size</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet tenetur
          nihil expedita cumque, tempore sed nostrum placeat omnis eum in quae
          quasi ab, ea et! Quaerat, officia nihil? Corrupti, voluptas?
        </p>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 1,
            });
          }}
        >
          +
        </button>
        <button className="btn btn-primary m-2" onClick={() => {
            this.setState({
              fSize: this.state.fSize - 1,
            });
          }}>-</button>
      </div>
    );
  }
}
