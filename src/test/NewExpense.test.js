import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewExpense from "../components/NewExpense/NewExpense";

describe("NewExpense component", () => {
  test("render new expense", () => {
    // Arrange
    render(<NewExpense />);

    // Act
    // ...nothing

    // Assert
    const helloElement = screen.getByText("Add New Expense");
    expect(helloElement).toBeInTheDocument();
  });

  test("renders new expense form with cancel button when Add New Expense button onclick", () => {
    // Arrange
    render(<NewExpense />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Cancel");
    expect(outputElement).toBeInTheDocument();
  });

  test("closes new epense form when cancel button is clicked", () => {
    // Arrange
    render(<NewExpense />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const cancelButtonElement = screen.getByText("Cancel");
    userEvent.click(cancelButtonElement);

    // Assert
    // const outputElement = screen.getAllByText("Add Expense");
    expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
  });
});
