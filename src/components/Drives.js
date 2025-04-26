// src/components/Drives.js
import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Drives = () => {
  const [drives, setDrives] = useState([]);

  useEffect(() => {
    const fetchDrives = async () => {
      const res = await api.get('/drives');
      setDrives(res.data);
    };
    fetchDrives();
  }, []);

  return (
    <div>
      <h3>Vaccination Drives</h3>
      <ul>
        {drives.map((drive) => (
          <li key={drive.id}>
            {drive.vaccineName} - {drive.date} - {drive.applicableClasses}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drives;
