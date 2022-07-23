import React, { Component } from 'react'
import BaiViet from './BaiViet';
import Card from './Card'

const dsBaiViet=[
    {tieuDe:'tiêu đề 1',noiDung:'nội dung 1'},
    {tieuDe:'tiêu đề 2',noiDung:'nội dung 2'},
    {tieuDe:'tiêu đề 3',noiDung:'nội dung '},
]

export default class DemoProps extends Component {
  render() {
    const tenSP = 'Product 1';
    const gia = 1000;
    const baiViet ={
        tieuDe:'Làm giàu không khó',
        noiDung:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum natus repudiandae inventore error quibusdam molestiae eum suscipit soluta hic eos, culpa, placeat ratione enim fugiat ut ad? Obcaecati, dolores pariatur!'
    }
    return (
      <div className='container'>
        <div className='w-25'>
            <Card tenSP={tenSP} gia ={gia}/>
        </div>
        <div className='w-25'>
            <Card tenSP={'product 2'} gia ={2000}/>
        </div>
        <hr />
        <h3>Demo bài viết</h3>

        {dsBaiViet.map((baiViet,index)=>{
            return <div key={index}>
                <BaiViet obBaiViet ={baiViet}/>
            </div>
        })}

        {/* <BaiViet obBaiViet ={baiViet}/> */}

      </div>
    )
  }
}
