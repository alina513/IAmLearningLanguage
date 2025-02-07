import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container, Button, LogOut } from './AppBar.styled';
import { selectIsLoggedIn } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import sprite from '../../../assets/sprite.svg';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { deleteToken } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogOut = () => {
    signOut(auth);
    dispatch(deleteToken());
    navigate('/');
  };

  return (
    <Container>
      <Navigation />
      {isLoggedIn && (
        <Button onClick={() => setIsOpen(true)}>
          <svg width="30" height="30">
            <use xlinkHref={sprite + '#mobile-menu-open'}></use>
          </svg>
        </Button>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      {isLoggedIn && <LogOut onClick={handlerLogOut}>Log out</LogOut>}
    </Container>
  );
};
