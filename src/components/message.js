import React from "react";

const Message = ({ msg }) => (
  <div className="ui icon message">
    <i className="icon info"></i>
    <div className="container">
      <div className="header">{msg.header}</div>
      <p>{msg.content}</p>
    </div>
  </div>
)


export default Message;