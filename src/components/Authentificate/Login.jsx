import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Error, Input, Button } from './Login.styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { addToken } from '../../redux/authSlice';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('example@com.ua').required('Required'),
  password: Yup.string().min(6, 'Must be min 6 symbols').required('Required'),
});

export function Login() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ validationSchema: SignupSchema });

  const onSubmit = async (data, e) => {
    const { email, password } = data;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();

      dispatch(addToken(token));
      reset();
      return result.user;
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit">Log in</Button>
    </form>
  );
}
