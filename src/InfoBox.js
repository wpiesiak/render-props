import React from "react";
import classNames from "classnames";

export const InfoBox = (props) => {
  return (
    <div className={classNames("info-box", { "-active": props.isActive })}>
      <h2 className="info-box__title">Hi! There is some title! </h2>
      <p className="info-box__content">
        Hi! This is info box! Click on it to set is as active and see what is
        going to happen!
      </p>
      <p className="info-box__footer">
        {props.isActive ? "info box is active!" : "info box is not active...."}
      </p>
    </div>
  );
};
