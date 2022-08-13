import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      count: 60,
      product: {
        id: 1,
        name: "product1",
        like: 1,
      },
    };
    console.log("constructor");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("render");
    return (
      <div className="container mt-2">
        <h3>{this.state.count}</h3>
        <h3>Number:{this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <h3>Like:{this.state.like}</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            // this.setState({
            //   like: this.state.like + 1,
            // });
            let product = this.state.product;
            product.like += 1;

            this.setState({
              product: { ...product },
            });
          }}
        >
          +
        </button>
        <Child number={this.state.number} product={this.state.product} />
      </div>
    );
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
      console.log(this.state.count);
    }, 1000);

    //Chạy 1 lần khi render
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    // hàm này sẽ chạy trước khi component biến mất khỏi giao diện
    clearInterval(this.timeout);
  }
}

// class SinhVien {
//     maSinhVien ='';
//     static ShowLog(){
//         console.log('ABC');

//         //Không sử dụng được con trỏ this
//     }
// // chỉ có thể sử dụng SinhVien.ShowLog()
// }
