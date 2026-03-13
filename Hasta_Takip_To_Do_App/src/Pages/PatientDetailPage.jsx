import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TodoList from '../Components/TodoList';
import AddTodoForm from '../Components/AddTodoForm';

const PatientDetailPage = ({ patients, onUpdatePatient }) => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const foundPatient = patients.find(p => p.id === id);
    setPatient(foundPatient);
  }, [id, patients]);

  const handleUpdateTodos = (updatedTodos) => {
    const updatedPatient = { ...patient, todos: updatedTodos };
    setPatient(updatedPatient);
    onUpdatePatient(updatedPatient);
  };

  if (!patient) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{patient.name} - İlaç Takibi</h1>
      <p>Yaş: {patient.age}</p>
      <p>Kimlik No: {patient.identityNumber}</p>
      <AddTodoForm patientId={id} onAddTodo={(newTodo) => handleUpdateTodos([...patient.todos, newTodo])} />
      <TodoList todos={patient.todos} onUpdateTodos={handleUpdateTodos} />
    </div>
  );
};

export default PatientDetailPage;