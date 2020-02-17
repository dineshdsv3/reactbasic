import React from 'react';

const FormInlineMessage = ({content, type}) => (

    <span style={{color: type === "error" ? "#9f3a38": "#6597a7"}}>{content}</span>

)

export default FormInlineMessage;