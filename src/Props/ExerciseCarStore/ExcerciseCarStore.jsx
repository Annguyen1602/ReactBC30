import React, { Component } from "react";
import ExModal from "./ExModal";
import ExProductList from "./ExProductList";

export default class ExcerciseCarStore extends Component {
  state = {
    modalState: {
      id: 4,
      name: "Steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  };
  xemChiTiet =(sanPhamClick)=>{
    console.log(sanPhamClick)
    this.setState({
        modalState:sanPhamClick
    })

  }
  render() {
    return (
      <div className="container">
        <h3>ExcerciseCarStore</h3>
        <ExModal modalState ={this.state.modalState}/>
        <ExProductList xemChiTiet ={this.xemChiTiet}/>
      </div>
    );
  }
}
