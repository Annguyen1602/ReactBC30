// rfc" react function components
import React from "react";

export default function DemoFunction() {
  // Nội dung của component phải được bao phủ bởi 1 thẻ
  return (
    <div>
      <div className="card text-start">
        <img className="card-img-top" src="text-start" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}
