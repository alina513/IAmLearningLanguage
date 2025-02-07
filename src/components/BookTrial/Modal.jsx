import Modal from 'react-modal';
import { Form } from './Form';
import sprite from '../../assets/sprite.svg';
import {
  Wrapper,
  Button,
  Title,
  Desc,
  Container,
  Photo,
  Text,
  Name,
} from './Modal.styled';

Modal.setAppElement('#modal');

export const ModalTrial = ({
  isOpenModalBook,
  setIsOpenModalBook,
  avatar,
  name,
  surname,
}) => {
  const styles = {
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
      padding: '20px',
      maxWidth: '600px',
      maxHeight: '672px',
      borderRadius: '30px',
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpenModalBook}
        onRequestClose={() => {
          setIsOpenModalBook(false);
          document.body.classList.remove('modal-open');
        }}
        style={styles}
        contentLabel="More info modal"
      >
        <Wrapper>
          <Button
            onClick={() => {
              setIsOpenModalBook(false);
              document.body.classList.remove('modal-open');
            }}
          >
            <svg width="32px" height="32px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </Button>

          <Title>Book trial lesson</Title>

          <Desc>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </Desc>

          <Container>
            <Photo src={avatar} alt="Avatar" />
            <div>
              <Text>Your teacher</Text>
              <Name>
                {name} {surname}
              </Name>
            </div>
          </Container>
          <Form  setIsOpenModalBook = {setIsOpenModalBook}/>
        </Wrapper>
      </Modal>
    </>
  );
};
