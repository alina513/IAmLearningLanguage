import { LogOut, Container } from './UserMenu.styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { deleteToken } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogOut = () => {
    signOut(auth);
    dispatch(deleteToken());
    navigate('/');
  };
  return (
    <Container>
      <LogOut onClick={handlerLogOut}>Log out</LogOut>
    </Container>
  );
};
