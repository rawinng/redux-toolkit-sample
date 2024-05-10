import React from "react";
import Counter from "./Counter";

import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";

test("counter should be display", () => {
  renderWithProviders(<Counter />);
  const counter = screen.getByTestId("counter");
  expect(counter).toBeInTheDocument();
});
