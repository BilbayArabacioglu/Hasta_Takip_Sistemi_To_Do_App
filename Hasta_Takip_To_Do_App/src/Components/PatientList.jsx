import React from 'react';
import { Link } from 'react-router-dom';
import PatientCard from './PatientCard';

const PatientList = ({ patients, onUpdatePatient, onDeletePatient }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {patients.map(patient => (
        <PatientCard key={patient.id} patient={patient} onUpdate={onUpdatePatient} onDelete={onDeletePatient} />
      ))}
    </div>
  );
};

export default PatientList;