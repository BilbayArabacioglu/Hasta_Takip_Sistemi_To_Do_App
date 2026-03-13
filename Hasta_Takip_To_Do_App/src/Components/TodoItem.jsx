import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggle(todo.id)} 
          className="mr-2"
        />
        {isEditing ? (
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            className="flex-1 p-1"
          />
        ) : (
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#9ca3af' : 'inherit' }}>{todo.text}</span>
        )}
      </div>
      <div>
        {isEditing ? (
         <button onClick={handleUpdate} style={{ backgroundColor: '#16a34a', color: 'white', padding: '2px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Kaydet</button>
        ) : (
          <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#2563eb', color: 'white', padding: '2px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Düzenle</button>
        )}
        <button onClick={() => onDelete(todo.id)} style={{ backgroundColor: '#dc2626', color: 'white', padding: '2px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Sil</button>
      </div>
    </div>
  );
};

export default TodoItem;