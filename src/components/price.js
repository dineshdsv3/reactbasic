import React from "react";

const Price = ({ gamePrice }) => (
  <span className="ui green ribbon label">${gamePrice.price}</span>
);

export default Price;
