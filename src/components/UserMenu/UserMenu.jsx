import { LogOut, Container } from './UserMenu.styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { deleteToken } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handlerLogOut = () => {
    signOut(auth);
    dispatch(deleteToken());
  };
  return (
    <Container>
      <LogOut onClick={handlerLogOut}>Log out</LogOut>
    </Container>
  );
};
