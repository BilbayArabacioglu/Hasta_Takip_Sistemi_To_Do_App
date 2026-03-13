import React, { useState } from 'react';

const AddPatientForm = ({ onAddPatient }) => {
    
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && age && identityNumber.trim()) {
      onAddPatient({
        id: Date.now().toString(), // Basit ID
        name,
        age: parseInt(age),
        identityNumber,
        todos: []
      });
      setName('');
      setAge('');
      setIdentityNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-center">Yeni Hasta Ekle</h3>
     <div className="mb-2">
  <input 
    type="text" 
    value={identityNumber} 
    onChange={(e) => setIdentityNumber(e.target.value.replace(/\D/g, ''))} 
    placeholder="Kimlik Numarası" 
    className="border p-2 w-full text-sm rounded"
    required
  />
</div>
<div className="mb-2">
  <input 
    type="text" 
    value={name} 
    onChange={(e) => setName(e.target.value)} 
    placeholder="İsim Soyisim" 
    className="border p-2 w-full text-sm rounded"
    required
  />
</div>
<div className="mb-2">
  <input 
    type="number" 
    value={age} 
    onChange={(e) => setAge(e.target.value)} 
    placeholder="Yaş" 
    className="border p-2 w-full text-sm rounded"
    required
  />
</div>
     <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600', width: '100%' }}>Hasta Ekle</button>
    </form>
  );
};

export default AddPatientForm;