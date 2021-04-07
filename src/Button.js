import classNames from "classnames";
import React from "react";

export const Button = (props) => {
  return (
    <button className={classNames("button", { "-active": props.isActive })}>
      {props.isActive ? "Button is active!" : "Button is not active"}
    </button>
  );
};
