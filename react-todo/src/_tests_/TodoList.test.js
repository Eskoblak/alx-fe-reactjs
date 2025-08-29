import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders todos", () => {
    render(<TodoList todos={["Learn React", "Build a Todo App"]} />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can delete a todo", () => {
    const todos = ["Build a Todo App"];
    render(<TodoList todos={todos} />);

    // get the delete button by role (button) and name (text content)
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    // click the delete button
    fireEvent.click(deleteButton);

    // expect todo to be removed
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
