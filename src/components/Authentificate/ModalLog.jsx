import Modal from 'react-modal';
import sprite from '../../assets/sprite.svg';
import { Login } from './Login';
import { Wrapper, Close, Title, Text } from './ModalLog.styled';

Modal.setAppElement('#modal');

export const ModalLogin = ({ isOpenModalLogin, setIsOpenModalLogin }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(30, 66, 89, 0.4)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '40px',
      maxWidth: '566px',
      maxHeight: '600px',
      borderRadius: '30px',
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpenModalLogin}
        onRequestClose={() => {
          setIsOpenModalLogin(false);
        }}
        style={customStyles}
        contentLabel="More info modal"
      >
        <Wrapper>
          <Close
            onClick={() => {
              setIsOpenModalLogin(false);
            }}
          >
            <svg width="32px" height="32px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </Close>

          <Title>Log In</Title>

          <Text>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </Text>

          <Login />
        </Wrapper>
      </Modal>
    </>
  );
};
