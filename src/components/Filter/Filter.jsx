import { Form, Wrapper, Lab, Select } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFilter } from '../../redux/filterSlice';

export function Filter() {
  const languages = [
    '',
    'French',
    'English',
    'German',
    'Ukrainian',
    'Polish',
    'Italian',
    'Spanish',
    'Mandarin Chinese',
    'Korean',
  ];

  const levels = [
    '',
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
    'C1 Advanced',
    'C2 Proficient',
  ];

  const prices = ['', 10, 20, 30, 40];

  const [statelanguage, setstateLanguages] = useState();
  const [statelevel, setStateLevel] = useState();
  const [stateprice, setStatePrices] = useState();

  const getFilter = () => {
    return {
      languages: statelanguage,
      levels: statelevel,
      prices: stateprice,
    };
  };

  const dispatch = useDispatch();

  const HandlerLanguages = e => {
    setstateLanguages(e.target.value);
    return dispatch(addFilter({ ...getFilter(), languages: e.target.value }));
  };

  const HandlerlLevel = e => {
    setStateLevel(e.target.value);
    return dispatch(addFilter({ ...getFilter(), levels: e.target.value }));
  };

  const HandlerPrice = e => {
    setStatePrices(e.target.value);
    return dispatch(addFilter({ ...getFilter(), prices: e.target.value }));
  };

  return (
    <Form>
      <Wrapper>
        <Lab>Languages</Lab>
        <Select id="languages" name="languages" onChange={HandlerLanguages}>
          {languages.map(language => (
            <option key={nanoid()} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </Wrapper>

      <Wrapper>
        <Lab>Level of knowledge</Lab>
        <Select id="level" name="level" onChange={HandlerlLevel}>
          {levels.map(level => (
            <option key={nanoid()} value={level}>
              {level}
            </option>
          ))}
        </Select>
      </Wrapper>

      <Wrapper>
        <Lab>Price</Lab>
        <Select id="price" name="price" onChange={HandlerPrice}>
          {prices.map(price => (
            <option key={nanoid()} value={price}>
              {price}
            </option>
          ))}
        </Select>
      </Wrapper>
    </Form>
  );
}
