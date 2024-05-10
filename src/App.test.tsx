import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

test("renders learn react link", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Hello, world!!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders logo", () => {
  renderWithProviders(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});

test("renders header", () => {
  renderWithProviders(<App />);
  // get by class name
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
