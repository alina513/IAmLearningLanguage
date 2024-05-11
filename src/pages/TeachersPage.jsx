import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../redux/operations';
import {TeachersList} from '../components/TeacherList/TeacherList';

export default function TeachersPage() {
    const [teachers, setTeachers] = useState([]);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await dispatch(fetchTeachers()); // Викликаємо операцію fetchTeachers
          const data = response.payload; // Отримуємо дані з об'єкта відповіді
          setTeachers(data); // Оновлюємо стан teachers з отриманими даними
        } catch (error) {
          console.error('Loading error', error.message);
        }
      };
  
      fetchData(); // Викликаємо функцію fetchData при монтажі компонента
    }, [dispatch]); // Додаємо dispatch як залежність, щоб уникнути предупреждення про залежності
  
    return (
      <>
        <TeachersList teachers={teachers} />
      </>
    );
}