import { render, screen } from "@testing-library/react";
import Button from "../components/UI/Button";

describe("Button component", () => {
  test("render button", () => {
    // Arrange
    render(<Button>Hello</Button>);

    // Act
    // ...nothing

    // Assert
    const helloElement = screen.getByText("Hello");
    expect(helloElement).toBeInTheDocument();
  });
  test("button onclick", () => {
    // Arrange
    const mockFunction = jest.fn(()=> {})
    render(<Button onClick={mockFunction}>Hello</Button>)
  })
});
