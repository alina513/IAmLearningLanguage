import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/operations';
import { LoadMore, Wrapper } from './Teachers.styled';
import { TeachersList } from '../TeacherList/TeacherList';
import { Filter } from '../Filter/Filter';

export const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [teachersPerPage] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchTeachers());
        const data = response.payload;
        setTeachers(data);
      } catch (error) {
        console.error('Loading error', error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  const indexOfFirstTeacher = (currentPage - 1) * teachersPerPage;

  const indexOfLastTeacher = indexOfFirstTeacher + teachersPerPage;

  const currentTeachers = teachers.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const hasMoreData = teachers.length > indexOfLastTeacher;

  return (
    <Wrapper>
      <Filter />
      <TeachersList teachers={currentTeachers} />
      {hasMoreData && (
        <LoadMore onClick={() => paginate(currentPage + 1)}>Load more</LoadMore>
      )}
    </Wrapper>
  );
};
