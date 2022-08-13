import React, { Component } from "react";
import { connect } from "react-redux";

 class ChangeCarColor extends Component {
    ChangeColor =(color)=>{
        const action ={
            type:'CHANGE_COLOR',
            imgCar: `./img/products/${color}-car.jpg`
        }
        this.props.dispatch(action);
        
    }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3>Bài tập chọn màu xe</h3>
        <div className="row">
        <div className="col-6">
          <img src={this.props.imgCar} alt="..." className="w-100" />
        </div>
        <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={() => {
                this.ChangeColor('red')
            }}
          >
            Red car
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
                this.ChangeColor('black')
            }}
          >
            Black car
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
                this.ChangeColor('Silver')
              
            }}
          >
            Silver car
          </button>
          <button
            className="btn btn-light"
            onClick={() => {
                this.ChangeColor('Steel')
              
            }}
          >
            Steel car
          </button>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
    return {
      imgCar: rootReducer.imgCar,
    };
  };

export default connect(mapStateToProps)(ChangeCarColor);

/**
 arrow function return về 1 object

 ()=>{
    return {

    }

 }

 Viết tắt: { return tương đương ()
    ({})
 */
