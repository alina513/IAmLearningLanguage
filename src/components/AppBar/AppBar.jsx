import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container } from './AppBar.styled';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};
