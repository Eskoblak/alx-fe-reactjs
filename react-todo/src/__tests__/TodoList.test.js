import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');
  
  fireEvent.change(input, { target: { value: 'New Test Todo' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('New Test Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoText = screen.getByText('Learn React');
  
  // Get the parent li element to check styles
  const todoItem = todoText.closest('li');
  
  // Initially not completed
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  
  // Click to complete
  fireEvent.click(todoText);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  
  // Check that the todo exists first
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  
  const deleteButton = screen.getByTestId('delete-button-1');
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

test('does not add empty todo', () => {
  render(<TodoList />);
  
  // Count initial todos by looking for list items
  const initialTodoItems = screen.getByTestId('todo-list').children.length;
  const addButton = screen.getByTestId('add-button');
  
  fireEvent.click(addButton);
  
  // Count should remain the same
  expect(screen.getByTestId('todo-list').children.length).toBe(initialTodoItems);
});

// Additional test for the completed todo from initial state
test('initially completed todo has line-through style', () => {
  render(<TodoList />);
  
  const completedTodoText = screen.getByText('Write Tests');
  const completedTodoItem = completedTodoText.closest('li');
  
  expect(completedTodoItem).toHaveStyle('text-decoration: line-through');
});