import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders todo items", () => {
  render(<TodoList />);
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});

test("deletes a todo item", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Build a Todo App/i);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
