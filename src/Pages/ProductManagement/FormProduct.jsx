import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "0",
      img: "",
      productType: "mobile",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
    },
  };

  hangleChange = (e) => {
    let { id, value } = e.target;
    let dataType = e.target.getAttribute("data-type");

    //Xử lý productInfo
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;

    // xử lý lỗi
    let newErrors = { ...this.state.errors };
    // check rỗng
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = id + "không được để trống";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errorMess = id + " phải là số!";
        }
      }
      // Lỗi định dạng
    }
    newErrors[id] = errorMess;

    // setState
    this.setState(
      {
        productInfo: newValue,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //Check trước khi submit dữ liệu
    let valid = true;
    let { errors, productInfo } = this.state;

    //check error
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }
    // Check value
    for (let key in productInfo) {
      if (productInfo[key] === "") {
        valid = false;
        break;
      }
    }

    // console.log({ valid});
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
    //Hợp lệ
    // alert("Submited");
    this.props.createProduct(productInfo);
  };
  // static getDerivedStateFromProps(newProps, currentState) {
  //   // lấy props.productEdit => gán vào state.productInfo => sau đó giao diện lấy ra từ state

  //   if (newProps.productEdit.id !== currentState.productInfo.id) {
  //     //Bấm nút edit
  //     currentState.productInfo = newProps.productEdit;
  //     return currentState; // hàm này sẽ tạo ra this,state mới
  //   }
  //   return null;
  // }

  componentWillReceiveProps(newProps) {
    // Khi bấm nút chỉnh sửa lấy props gắn vào state => giao diện render ra từ state
    this.setState({
      productInfo: newProps.productEdit,
    });
  }

  render() {
    
    let { id, name, productType, img, description, price } =
      this.state.productInfo;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div
          className="card-header bg-dark text-warning"
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Product Info
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>ID</p>
              <input
                value={id}
                className="form-control"
                id="id"
                name="id"
                onChange={this.hangleChange}
              />
              <p className="text-danger">{this.state.errors.id}</p>
            </div>
            <div className="form-group">
              <p>Name</p>
              <input
                value={name}
                className="form-control"
                id="name"
                name="id"
                onChange={this.hangleChange}
              />
              <p className="text-danger">{this.state.errors.name}</p>
            </div>
            <div className="form-group">
              <p>Price</p>
              <input
                value={price}
                data-type="number"
                className="form-control"
                id="price"
                name="id"
                type="text"
                onChange={this.hangleChange}
              />
              <p className="text-danger">{this.state.errors.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Image</p>
              <input
                value={img}
                className="form-control"
                id="img"
                name="id"
                onChange={this.hangleChange}
              />
              <p className="text-danger">{this.state.errors.img}</p>
            </div>
            <div className="form-group">
              <p>Product Type</p>
              <select
                className="form-control"
                id="productType"
                name="productType"
                onChange={this.hangleChange}
              >
                <option>Mobile</option>
                <option>Table</option>
                <option>Laptop</option>
              </select>
            </div>
            <div className="form-group mt-2">
              <p>Product description</p>
              <textarea
                value={description}
                name="description"
                id="description"
                cols={50}
                rows={3}
                onChange={this.hangleChange}
              ></textarea>
              <p className="text-danger">{this.state.errors.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button className="btn btn-primary mx-2" type="button" onClick={()=>{
            this.props.updateProduct(this.state.productInfo)
          }}>Update</button>
        </div>
      </form>
    );
  }
}
