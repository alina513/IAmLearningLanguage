// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchTeachers } from '../../redux/operations';
// import { LoadMore } from "./Teachers.styled";
// import { TeachersList } from "../TeacherList/TeacherList";
// export const Teachers = () => {
//     const [teachers, setTeachers] = useState([]);
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await dispatch(fetchTeachers()); // Викликаємо операцію fetchTeachers
//           const data = response.payload; // Отримуємо дані з об'єкта відповіді
//           setTeachers(data); // Оновлюємо стан teachers з отриманими даними
//         } catch (error) {
//           console.error('Loading error', error.message);
//         }
//       };
  
//       fetchData(); // Викликаємо функцію fetchData при монтажі компонента
//     }, [dispatch]); // Додаємо dispatch як залежність, щоб уникнути предупреждення про залежності
  
//     return(
//         <>
//         <TeachersList teachers={teachers}/>
//         <LoadMore>Load more</LoadMore>
//         </>
//     )
//     }


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/operations';
import { LoadMore } from "./Teachers.styled";
import { TeachersList } from "../TeacherList/TeacherList";
import {Filter} from "../Filter/Filter"

export const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Поточна сторінка
    const [teachersPerPage] = useState(4); // Кількість вчителів на сторінці
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

    // Обчислення індексу початкового вчителя на поточній сторінці
    const indexOfFirstTeacher = (currentPage - 1) * teachersPerPage;
    // Обчислення індексу останнього вчителя на поточній сторінці
    const indexOfLastTeacher = indexOfFirstTeacher + teachersPerPage;
    // Відображення вчителів на поточній сторінці
    const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

    // Функція для зміни поточної сторінки
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Перевірка наявності ще даних для завантаження
    const hasMoreData = teachers.length > indexOfLastTeacher;

    return(
        <>
        <Filter/>
        <TeachersList teachers={currentTeachers}/>
        {hasMoreData && <LoadMore onClick={() => paginate(currentPage + 1)}>Load more</LoadMore>}
        </>
    )
}
