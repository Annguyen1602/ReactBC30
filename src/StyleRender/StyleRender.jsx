import React, { Component } from 'react'
import './style.css'; //Cách này sẽ ảnh hưởng toàn bộ ứng dụng
// Dùng khi cần css cho page
import style from "./StyleRender.module.css"// Dùng khi class có thể bị thay đỏi bởi các event từ người dùng

// cách inline trực tiếp: duigf khi giá trị style bị thay đỏi bởi event người dùng

export default class StyleRender extends Component {
  render() {
    return (
      <div>
        StyleRender
        <p className='color-red'>Hello Trường An</p>
        <p className={`${style['color-blue']} display-4`}>text blue</p>
        <p style={{color:'green',padding:'15px',backgroundColor:"black"}}>Line Green</p>
        </div>
    )
  }
}
