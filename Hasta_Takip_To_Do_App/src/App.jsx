import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './Pages/HomePage';
import './App.css'

const initialPatients = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    age: 45,
    identityNumber: '12345678901',
    todos: [
      { id: 't1', text: 'Aspirin 100mg (günde 1)', completed: false },
      { id: 't2', text: 'İnsülin 10ml (kahvaltıdan önce)', completed: true },
    ],
  },
  {
    id: '2',
    name: 'Ayşe Kaya',
    age: 32,
    identityNumber: '12345678902',
    todos: [
      { id: 't3', text: 'Lisinopril 10mg (sabah)', completed: false },
      { id: 't4', text: 'Vitamin D (akşam)', completed: false },
    ],
  },
  {
    id: '3',
    name: 'Mehmet Demir',
    age: 28,
    identityNumber: '12345678903',
    todos: [
      { id: 't5', text: 'Metformin 500mg (öğle)', completed: false },
    ],
  },
  {
    id: '4',
    name: 'Fatma Çelik',
    age: 55,
    identityNumber: '12345678904',
    todos: [
      { id: 't6', text: 'Statin (akşam yemek sonrası)', completed: false },
      { id: 't7', text: 'Egzersiz (30 dk yürüyüş)', completed: true },
    ],
  },
  {
    id: '5',
    name: 'Ali Şahin',
    age: 40,
    identityNumber: '12345678905',
    todos: [
      { id: 't8', text: 'Vitamin C (sabah)', completed: false },
    ],
  },
  {
    id: '6',
    name: 'Zeynep Aydın',
    age: 29,
    identityNumber: '12345678906',
    todos: [
      { id: 't9', text: 'Demir takviyesi (akşam)', completed: false },
    ],
  },
  {
    id: '7',
    name: 'Mustafa Öztürk',
    age: 60,
    identityNumber: '12345678907',
    todos: [
      { id: 't10', text: 'Tansiyon ilacı (sabah)', completed: false },
    ],
  },
  {
    id: '8',
    name: 'Elif Kara',
    age: 35,
    identityNumber: '12345678908',
    todos: [
      { id: 't11', text: 'Alerji ilacı (akşam)', completed: false },
    ],
  },
  {
    id: '9',
    name: 'Hüseyin Yıldız',
    age: 50,
    identityNumber: '12345678909',
    todos: [
      { id: 't12', text: 'Kolesterol ilacı (sabah)', completed: false },
    ],
  },
  {
    id: '10',
    name: 'Gamze Arslan',
    age: 25,
    identityNumber: '12345678910',
    todos: [
      { id: 't13', text: 'Probiyotik (gece)', completed: false },
    ],
  },
];

function App() {
  const [patients, setPatients] = useState(initialPatients);

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const handleRefresh = () => {
    // Derin kopya ile sadece baştaki ilaçlar kalır, eklenenler silinir
    const resetPatients = initialPatients.map(p => ({
      ...p,
      todos: p.todos.map(todo => ({ ...todo }))
    }));
    setPatients(resetPatients);
  }

  const handleUpdatePatient = (updatedPatient) => {
    setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p));
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage patients={patients} onAddPatient={handleAddPatient} onUpdatePatient={handleUpdatePatient} onDeletePatient={handleDeletePatient} onRefresh={handleRefresh} />} />
      </Routes>
    </Router>
  )
  
}

export default App
