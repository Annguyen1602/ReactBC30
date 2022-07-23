import React, { Component } from "react";
// Demo toán tử điều kiện
export default class DemoState extends Component {
  username = "Trường An";
  status = false;
  //this.state là thuộc tính có sẳn được kế thừa từ class Component của thư viện React.
  // Các giá trị thay đổi trên giao diénex chứa các thuộc tính của this.state
  state = {
    status: false,
  };
  renderLogin = () => {
    // Nếu if có return thì không cần else
    if (this.state.status) {
      return <span className="text-white">{this.username}</span>;
    }
    return (
      <button
        className="btn btn-danger"
        onClick={(e) => {
          //chặn sự kiện reload browser
          e.preventDefault();
          this.dangNhap();
        }}
      >
        Đăng Nhập
      </button>
    );
  };
  dangNhap = () => {
    console.log("Đang nhập");
    // không được phép gán state trực tiếp
    //this.state.status
    // let newState = { status: true };
    // this.setState(newState): this.setState nhận vào 1 object state mới thay thể cho object cũ, đồng thời render lại giao diện

    //Hàm setState là 1 hàm bất đồng bộ
    this.setState({ status: true }, () => {
      console.log("state", this.state);

      // ít khi code phía trong như vậy trừ khi muốn xem thông tin hoặc muốn 1 hàm chạy sau khi state thay đổi để lấy thông tin
      
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Demo State</h3>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {/* {this.status ? (
                <span className="text-white">{this.username}</span>
              ) : (
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Đăng Nhập
                </button>
              )} */}
              {this.renderLogin()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
