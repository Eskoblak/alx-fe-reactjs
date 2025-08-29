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
  
  fireEvent.click(todoText);
  expect(todoText).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByTestId('delete-button-1');
  
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});

test('does not add empty todo', () => {
  render(<TodoList />);
  const initialTodos = screen.getAllByTestId(/todo-item-/).length;
  const addButton = screen.getByTestId('add-button');
  
  fireEvent.click(addButton);
  expect(screen.getAllByTestId(/todo-item-/)).toHaveLength(initialTodos);
});