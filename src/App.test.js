// src/App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

test("time table", () => {
render(<App />);
const titleElement = screen.getByText(/Wait/i);
expect(titleElement).toBeInTheDocument();
});