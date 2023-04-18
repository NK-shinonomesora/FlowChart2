import React from "react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

const Message: React.FC = () => {
  return (
    <>
    <SuccessMessage />
    <ErrorMessage />
    </>
  )
}

export default Message;