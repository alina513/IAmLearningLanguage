import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {useDispatch } from 'react-redux';
import {Input, Button, Eyebut} from './Registration.styled';
// import { FiEyeOff, FiEye } from '../../../public';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import {addToken} from '../../redux/authSlice';


const SignupSchema = Yup.object().shape({
    email: Yup.string().email("example@com.ua").required('Required'),
    password: Yup.string().min(6, "Must be min 6 symbols").required('Required'),
  });


export function Login() {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, 
    reset
  } = useForm({ validationSchema:SignupSchema});


  const  onSubmit = async (data, e) => {
    const { email, password } = data;
   
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await result.user.getIdToken();

    dispatch(addToken(token));
    reset();
    return result.user;
  } catch (error) {
    throw error;
  }}
    

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
  
         <Input type="email" 
         id = "email" 
         placeholder='Email' 
         {...register('email', { required: true })} />
   
       <div>
     
         <Input type={isPasswordVisible ? 'text' : 'password'} 
         id = "password" 
         placeholder='Password' 
         {...register('password', { required: true })} />

<Eyebut type='button' onClick={()=>setVisibility(!visibility)}>
           {
            // visibility? < FiEye onClick={handlePassword}/> : < FiEyeOff onClick={handlePassword}/>
           }
         </Eyebut> 
    
       </div>
      <Button type="submit">Log in</Button>
  </form>
    
  );
}