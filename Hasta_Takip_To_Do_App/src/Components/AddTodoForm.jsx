import React, { useState } from 'react';

const AddTodoForm = ({ patientId, onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo({
        id: Date.now().toString(),
        text,
        completed: false
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 max-w-md mx-auto flex items-center gap-2">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Yeni ilaç ekle..." 
        className="border p-1 text-sm rounded flex-1"
      />
      <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Ekle</button>
    </form>
  );
};

export default AddTodoForm;