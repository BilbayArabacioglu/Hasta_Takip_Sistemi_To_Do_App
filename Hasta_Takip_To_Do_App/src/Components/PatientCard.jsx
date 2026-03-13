import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const PatientCard = ({ patient, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(patient.name);
  const [editAge, setEditAge] = useState(patient.age);
  const [editIdentityNumber, setEditIdentityNumber] = useState(patient.identityNumber);
  const [todos, setTodos] = useState(patient.todos);

  const handleSave = () => {
    onUpdate({ ...patient, name: editName, age: parseInt(editAge), identityNumber: editIdentityNumber, todos });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(patient.name);
    setEditAge(patient.age);
    setEditIdentityNumber(patient.identityNumber);
    setTodos(patient.todos);
    setIsEditing(false);
  };

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    onUpdate({ ...patient, todos: updatedTodos });
  };

  const handleUpdateTodos = (updatedTodos) => {
    setTodos(updatedTodos);
    onUpdate({ ...patient, todos: updatedTodos });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={editName} 
            onChange={(e) => setEditName(e.target.value)} 
            className="border p-1 mb-2 w-full"
            placeholder="İsim Soyisim"
          />
          <input 
            type="number" 
            value={editAge} 
            onChange={(e) => setEditAge(e.target.value)} 
            className="border p-1 mb-2 w-full"
            placeholder="Yaş"
          />
          <input 
            type="text" 
            value={editIdentityNumber} 
            onChange={(e) => setEditIdentityNumber(e.target.value)} 
            className="border p-1 mb-2 w-full"
            placeholder="Kimlik Numarası"
          />
          <button onClick={handleSave} style={{ backgroundColor: '#16a34a', color: 'white', padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600', marginRight: '8px' }}>Kaydet</button>
          <button onClick={handleCancel} style={{ backgroundColor: '#6b7280', color: 'white', padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}>İptal</button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-center">{patient.name}</h2>
          <p className="text-center">Yaş: {patient.age}</p>
          <p className="text-center">Kimlik No: {patient.identityNumber}</p>
          <div className="mt-2 flex justify-center gap-2">
            <button
  onClick={() => setIsEditing(true)}
  style={{ backgroundColor: '#2563eb', color: 'white', padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}
>
  Düzenle
</button>
<button
  onClick={() => onDelete(patient.id)}
  style={{ backgroundColor: '#dc2626', color: 'white', padding: '4px 14px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}
>
  Sil
</button>
              
          </div>
          <div className="mt-4">
            <AddTodoForm patientId={patient.id} onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onUpdateTodos={handleUpdateTodos} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCard;