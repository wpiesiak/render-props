import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Active } from "../Active";

test("render as not active", () => {
  const { container } = render(
    <Active>{(isActive) => (isActive ? "active" : "not active")}</Active>
  );

  expect(container.textContent).toBe("not active");
});

test("set as active after click", () => {
  const { container } = render(
    <Active>{(isActive) => (isActive ? "active" : "not active")}</Active>
  );

  fireEvent.click(container.firstChild);

  expect(container.textContent).toBe("active");
});
