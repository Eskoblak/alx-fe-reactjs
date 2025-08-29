import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(3);
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(4);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const initialCount = screen.getByTestId('todo-list').children.length;
    const deleteButton = screen.getByTestId('delete-button-1');
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(initialCount - 1);
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialCount = screen.getByTestId('todo-list').children.length;
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.click(addButton);
    
    expect(screen.getByTestId('todo-list').children).toHaveLength(initialCount);
  });
});