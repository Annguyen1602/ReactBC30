import React, { Component } from "react";
// kết nối redux
import { connect, Connect } from "react-redux";

class DemoTangGiamSoLuong extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Demo tăng giảm số lượng</h3>
        <p>Number:{this.props.number}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            //action: đại diện dữ liệu gửi lên store làm thay đổi state
            const action = {
              type: "TANG_SO_LUONG", // thuộc tính bắt buộc
              newNumber: this.props.number + 1,
            };
            //sử dụng hàm dispatch để gửi dữ liệu lên redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-success ms-2"
          onClick={() => {
            const action = {
              type: "GIAM_SO_LUONG",
              newNumber: this.props.number - 1,
            };
            this.props.dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
//HOC
/*
Chuyển state của redux về thành props của component
 */

const mapStateToProps = (rootReducer) => {
  return {
    number: rootReducer.number,
  };
};
//Khi gọi hàm sẽ tạo ra component chứa state của redux = connect()(DemoTangGiamSoLuong)
export default connect(mapStateToProps)(DemoTangGiamSoLuong);
