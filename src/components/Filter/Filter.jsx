import { Form, Wrapper, Lab, Select } from './Filter.styled';
import { nanoid } from 'nanoid';

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

  return (
    <Form>
      <Wrapper>
        <Lab>Languages</Lab>
        <Select id="languages" name="languages">
          {languages.map(language => (
            <option key={nanoid()} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </Wrapper>

      <Wrapper>
        <Lab>Level of knowledge</Lab>
        <Select id="level" name="level">
          {levels.map(level => (
            <option key={nanoid()} value={level}>
              {level}
            </option>
          ))}
        </Select>
      </Wrapper>

      <Wrapper>
        <Lab>Price</Lab>
        <Select id="price" name="price">
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
