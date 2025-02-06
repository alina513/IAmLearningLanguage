import { Wrapper, Link, Text, Title, Span, Button } from './HomeBar.styled';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { ModalLogin } from '../Authentificate/ModalLog';
import { useState } from 'react';
export const HomeBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  return (
    <>
      <Wrapper>
        <Title>
          Unlock your potential with the best <Span>language</Span> tutors
        </Title>
        <Text>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Text>
       {isLoggedIn ? <Link to="/teachers">Get started</Link> :<Button onClick={() => setIsOpenModalLogin(true)}>Log in</Button>}
      </Wrapper>
      <ModalLogin
        isOpenModalLogin={isOpenModalLogin}
        setIsOpenModalLogin={setIsOpenModalLogin}
      />
    </>
  );
};
