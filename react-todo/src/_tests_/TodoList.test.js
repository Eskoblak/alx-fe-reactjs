// src/_tests_/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders todo items", () => {
  render(<TodoList />);
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("can delete a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Build a Todo App");
  const deleteButton = todo.nextSibling; // button is next to span
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
