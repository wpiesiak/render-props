import { Active } from "./Active";
import { Button } from "./Button";
import { InfoBox } from "./InfoBox";
import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Active>{(isActive) => <InfoBox isActive={isActive} />}</Active>
      <Active>{(isActive) => <Button isActive={isActive} />}</Active>
    </div>
  );
}
