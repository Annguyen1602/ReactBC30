import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Không tìm thấy dữ liệu!
            Đề nghị bạn <NavLink to={''}>Trở về</NavLink> Trang chủ
        </h3>
        
      </div>
    )
  }
}
