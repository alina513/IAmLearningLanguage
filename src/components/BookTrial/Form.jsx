import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {
  Title,
  Wrapper,
  Label,
  Radio,
  Input,
  Book,
  RadioVis,
  Icon,
  Error,
} from './Form.styled';

import sprite from '../../assets/sprite.svg';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, ' Only letters, apostrophe, dash and spaces')
    .required('Required'),
  email: Yup.string().email('example@com.ua').required('Required'),
  number: Yup.string().min(10, 'Min 10 symbols').required('Required'),
});

const values = [
  { name: 'Career and business', id: '1', value: 'careerAndBusiness' },
  { name: 'Lesson for kids', id: '2', value: 'lessonForKids' },
  { name: 'Living abroad', id: '3', value: 'livingAbroad' },
  { name: 'Exams and coursework', id: '4', value: 'examsAndCoursework' },
  { name: 'Culture, travel or hobby', id: '5', value: 'cultureTravelOrHobby' },
];

export function Form({setIsOpenModalBook}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ validationSchema: SignupSchema });

  const onSubmit = data => {
    reset();
    setIsOpenModalBook(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Title>What is your main reason for learning English?</Title>

        <Wrapper>
          {values.map(({ name, value, id }) => (
            <Label key={id}>
              <Radio
                type="radio"
                name="topic"
                value={value}
                {...register('topic', { required: true })}
              />
              <RadioVis>
                <Icon width="10px" height="10px">
                  <use xlinkHref={sprite + '#icon-circle'} />
                </Icon>
              </RadioVis>
              <span>{name}</span>
            </Label>
          ))}
        </Wrapper>
      </div>

      <div>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </div>

      <div>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </div>

      <div>
        <Input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          {...register('phone', { required: 'Phone is required' })}
        />
        {errors.phone && <Error>{errors.phone.message}</Error>}
      </div>

      <Book type="submit">Book</Book>
    </form>
  );
}
