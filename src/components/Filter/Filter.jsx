import { Form, Wrapper, Lab, Select } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFilter } from '../../redux/filterSlice';
import { prices, languages, levels } from '../../const/filterArray';

export function Filter() {
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
        <Lab htmlFor="languages">Languages</Lab>
        <Select
          id="languages"
          name="languages"
          onChange={HandlerLanguages}
          value={statelanguage}
        >
          {languages.map(language => (
            <option key={nanoid()} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </Wrapper>

      <Wrapper>
        <Lab htmlFor="level">Level of knowledge</Lab>
        <Select
          id="level"
          name="level"
          onChange={HandlerlLevel}
          value={statelevel}
        >
          {levels.map(level => (
            <option key={nanoid()} value={level}>
              {level}
            </option>
          ))}
        </Select>
      </Wrapper>

      <Wrapper>
        <Lab htmlFor="price">Price</Lab>
        <Select
          id="price"
          name="price"
          onChange={HandlerPrice}
          value={stateprice}
        >
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
