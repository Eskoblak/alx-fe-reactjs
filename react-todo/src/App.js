import React from 'react';
import TodoList from './TodoList';  // This will automatically resolve .jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;