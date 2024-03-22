import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("to be siemanko visible on screen", () => {
    render(<App />);
    const headline = screen.getByText(/siemanko/i);
    expect(headline).toBeDefined();
  });

  it("to increment count by one", () => {
    render(<App />);
    const btn = screen.getByText(/count is 0/i);
    
    // expect(btn).(/count is 0/i)
    expect(btn).toBeDefined();
    fireEvent.click(btn)

    const btnIncreased = screen.getByText(/count is 1/i);
    expect(btnIncreased).toBeDefined()
  });
});
