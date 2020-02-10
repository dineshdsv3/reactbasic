import React from "react";

const DescriptionView = ({ descriptionView, descView ,description }) => (
descView ? (

      <i onClick={() => descriptionView(description)} className="ui icon green  unhide" style={{position:"absolute", right:"10px"}}/>
  ):
    (
<i onClick={() => descriptionView(description)} className="ui icon  unhide" style={{position:"absolute", right:"10px"}}/>
    )
  
  
);

export default DescriptionView;
