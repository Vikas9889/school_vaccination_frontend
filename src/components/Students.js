// src/components/Students.js
import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await api.get('/students');
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h3>Students</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.className}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
