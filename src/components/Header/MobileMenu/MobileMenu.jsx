import { LinkNav } from '../UserMenu/UserMenu.styled';
import { LogOut } from '../AppBar/AppBar.styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { deleteToken } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Overlay, Button, Container } from './MobileMenu.styled';
import sprite from '../../../assets/sprite.svg';

export const MobileMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogOut = () => {
    signOut(auth);
    dispatch(deleteToken());
    onClose();
    navigate('/');
  };
  return (
    <Overlay>
      <Button onClick={onClose}>
        <svg width="30" height="30">
          <use xlinkHref={sprite + '#mobile-menu-close'}></use>
        </svg>
      </Button>
      <Container>
        <LinkNav to="/" onClick={onClose}>
          Home
        </LinkNav>
        <LinkNav to="/teachers" onClick={onClose}>
          Teachers
        </LinkNav>
        <LinkNav to="/favorites" onClick={onClose}>
          Favorites
        </LinkNav>
        <LogOut onClick={handlerLogOut}>Log out</LogOut>
      </Container>
    </Overlay>
  );
};
