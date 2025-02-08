import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/operations';
import { selectFilter } from '../../redux/selectors';
import { LoadMore, Wrapper, Text } from './Teachers.styled';
import { TeachersList } from '../TeacherList/TeacherList';
import { Filter } from '../Filter/Filter';
import { selectTeachers, selectIsLoading } from '../../redux/selectors';
import { Loader } from '../Loader';

export const Teachers = () => {
  const filter = useSelector(selectFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const [teachersPerPage] = useState(4);
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const indexOfFirstTeacher = 0;

  const indexOfLastTeacher =
    (currentPage - 1) * teachersPerPage + teachersPerPage;

  const currentTeachers = teachers?.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const hasMoreData = teachers?.length > indexOfLastTeacher;

  const { languages, levels, prices } = filter;

  const searchTeachers = teachers?.filter(teacher => {
    if (!languages && !levels && !prices) {
      return true;
    }
    const languageSearch = !languages || teacher.languages.includes(languages);
    const levelSearch = !levels || teacher.levels.includes(levels);
    const priceSearch = !prices || teacher.price_per_hour <= prices;
    return languageSearch && levelSearch && priceSearch;
  });

  return (
    <Wrapper>
      <Filter />
      {isLoading && <Loader />}

      {filter.languages === '' &&
        filter.levels === '' &&
        filter.prices === '' && (
          <>
            <TeachersList teachers={currentTeachers} />
            {hasMoreData && (
              <LoadMore onClick={() => paginate(currentPage + 1)}>
                Load more
              </LoadMore>
            )}
          </>
        )}

      {filter.languages !== '' ||
      filter.levels !== '' ||
      filter.prices !== '' ? (
        <>
          {searchTeachers.length === 0 ? (
            <Text>There are no teachers with such data</Text>
          ) : (
            <TeachersList teachers={searchTeachers} />
          )}
        </>
      ) : null}
    </Wrapper>
  );
};
