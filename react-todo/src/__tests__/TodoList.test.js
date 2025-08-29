import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';  // This will automatically resolve .jsx


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

  test('input field is cleared after adding a todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    expect(input.value).toBe('Test Todo');
    
    fireEvent.click(addButton);
    expect(input.value).toBe('');
  });

  test('completed todo has line-through style', () => {
    render(<TodoList />);
    
    // The third todo should already be completed from initial state
    const completedTodo = screen.getByText('Write Tests');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
  });

  test('non-completed todo does not have line-through style', () => {
    render(<TodoList />);
    
    const nonCompletedTodo = screen.getByText('Learn React');
    expect(nonCompletedTodo).not.toHaveStyle('text-decoration: line-through');
  });
});