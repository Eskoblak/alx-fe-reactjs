import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos from static array', () => {
    render(<TodoList />);
    
    // Check that todos from the static array are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(3);
  });

  test('AddTodoForm allows users to add new todos', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(4);
  });

  test('todos can be toggled between completed and not completed by clicking on them', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Initially not completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    // Click to complete
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to uncomplete
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('todos can be deleted individually', () => {
    render(<TodoList />);
    
    const initialCount = screen.getByTestId('todo-list').children.length;
    const deleteButton = screen.getByTestId('delete-button-1');
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(initialCount - 1);
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    
    const initialCount = screen.getByTestId('todo-list').children.length;
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.click(addButton);
    
    expect(screen.getByTestId('todo-list').children).toHaveLength(initialCount);
  });
});