import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, world!!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders logo", () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});

test("renders header", () => {
  render(<App />);
  // get by class name
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
