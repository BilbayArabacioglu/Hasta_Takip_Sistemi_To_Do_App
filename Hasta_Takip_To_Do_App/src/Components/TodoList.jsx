import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdateTodos }) => {
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    onUpdateTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    onUpdateTodos(updatedTodos);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    );
    onUpdateTodos(updatedTodos);
  };

  return (
    <div className="mt-4">
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#dc2626' }}>İlaç Listesi</h3>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={toggleComplete} 
          onDelete={deleteTodo} 
          onUpdate={updateTodo} 
        />
      ))}
       <hr style={{ borderColor: '#374151', margin: '12px 0' }} />
    </div>
  );
};

export default TodoList;