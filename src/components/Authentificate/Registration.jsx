import { useForm } from 'react-hook-form';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Input, Button, Error } from './Registration.styled';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { addToken } from '../../redux/authSlice';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Only letters, apostrophe, dash and spaces')
    .required('Required'),
  email: Yup.string().email('example@com.ua').required('Required'),
  password: Yup.string().min(6, 'Must be min 6 symbols').required('Required'),
});

export function Registration() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ validationSchema: SignupSchema });

  const onSubmit = async data => {
    const { email, password } = data;

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(addToken(result.user.accessToken));
      reset();
      return result;
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="name"
        placeholder="Name"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <Error>{errors.name.message}</Error>}

      <Input
        type="email"
        id="email"
        placeholder="Email"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <Error>{errors.email.message}</Error>}

      <Input
        type="password"
        id="password"
        placeholder="Password"
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && <Error>{errors.password.message}</Error>}

      <Button type="submit">Sign Up</Button>
    </form>
  );
}
