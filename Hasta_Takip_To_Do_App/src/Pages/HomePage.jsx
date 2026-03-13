import React from 'react';
import PatientList from '../Components/PatientList';
import AddPatientForm from '../Components/AddPatientForm';

const HomePage = ({ patients, onAddPatient, onUpdatePatient, onDeletePatient, onRefresh }) => {
  const totalPatients = patients.length;
  const averageAge = totalPatients > 0 ? (patients.reduce((sum, p) => sum + p.age, 0) / totalPatients).toFixed(1) : 0;
  const totalMedicines = patients.reduce((sum, p) => sum + p.todos.length, 0);

  return (
   <div className="max-w-5xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Hasta Takip Sistemi To Do App</h1>
          
      </div>
      
      {/* Dashboard */}
     {/* Dashboard */}
<div className="border border-gray-300 rounded-xl bg-white/90 p-4 shadow-sm mb-6">
  <div style={{ display: 'flex', justifyContent: 'center', divideX: 'none' }}>
    <div style={{ minWidth: '180px', padding: '1rem', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Toplam Hasta</h2>
      <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>{totalPatients}</p>
    </div>
    <div style={{ minWidth: '180px', padding: '1rem', textAlign: 'center', borderRight: '1px solid #d1d5db' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Ortalama Yaş</h2>
      <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>{averageAge}</p>
    </div>
    <div style={{ minWidth: '180px', padding: '1rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Toplam İlaç</h2>
      <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>{totalMedicines}</p>
    </div>
  </div>
</div>
      <div className="flex justify-center mt-4">
 <button
  onClick={() => window.location.reload()}
  style={{ backgroundColor: '#4f46e5', color: 'white', padding: '8px 24px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600' }}
>
  Yenile
</button>
</div>

      
      <AddPatientForm onAddPatient={onAddPatient} />
      <PatientList patients={patients} onUpdatePatient={onUpdatePatient} onDeletePatient={onDeletePatient} />
    </div>
  );
};

export default HomePage;