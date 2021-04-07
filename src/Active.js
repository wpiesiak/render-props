import React, { useState } from "react";

export const Active = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return <div onClick={toggleActive}>{props.children(isActive)}</div>;
};
