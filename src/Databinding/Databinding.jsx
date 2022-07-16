import React, { Component } from "react";

export default class Databinding extends Component {
  // Đây là phương thức trong đối tượng component
  // Biến và hàm thì khi khai báo có var let const
  
  showInfo(){
    return "Hello mọi người"
  }
  renderCard = ()=>{
    return <div>
        <img src="https://picsum.photos/200/200" alt="photo" />
    </div>
  }
  
  render() {
    const hoTen = "Trường An";
    const tinhDiemTrungBinh = (diemToan, diemVan) => {
      return (diemToan + diemVan) / 2;
    };

    return (
      <div>
        Databinding
        <p>Họ tên:{hoTen}</p>
        <p>Điểm trung bình:{tinhDiemTrungBinh(8, 3)}</p>
        <p>{this.showInfo()}</p>
        <p>{this.renderCard()}</p>
      </div>
    );
  }
}
