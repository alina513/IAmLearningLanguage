import Modal from "react-modal";
import {BookForm} from './Form'; 
import sprite from '../../assets/sprite.svg';
import { Container,
         SvgButton,
         Title,
         Text,
         ContainerTeacher,
         AvatarImg,
         TextTeaher,
         FullName } from "./Modal.styled";

Modal.setAppElement('#modal');

export const ModalBookTrial = ({ isOpenModalBook, setIsOpenModalBook, avatar, name, surname }) => {

    const customStyles = {
      overlay: {
        backgroundColor: "rgba(30, 66, 89, 0.4)",
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        maxWidth: "600px",
        maxHeight: "972px",
        borderRadius: "30px",
      },
    };
    
      return (
        <>
        <Modal   
          isOpen={isOpenModalBook}
          onRequestClose={() => {
            setIsOpenModalBook(false);
          }}
               
          style={customStyles}
  
          contentLabel="More info modal"     
        >

        <Container >
            <SvgButton
             onClick={() => {
                setIsOpenModalBook(false);
             }}>
              <svg width= '32px' height='32px'>
                  <use xlinkHref={sprite + '#icon-x'} />
              </svg> 
           </SvgButton>

           <Title>Book trial lesson</Title>

           <Text>Our experienced tutor will assess your current language level, 
            discuss your learning goals, and tailor the lesson to your specific needs.</Text>

            <ContainerTeacher>
               <AvatarImg src={avatar} alt="Avatar"/>
               <div>
                 <TextTeaher>Your teacher</TextTeaher>
                 <FullName>{name} {surname}</FullName>
               </div>
            </ContainerTeacher>

            <BookForm/>
        </Container>

        </Modal>
        
        </>
      );
    }; 