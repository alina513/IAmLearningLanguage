import { Registation, Container, Login } from "./AuthNav.styled";
import { ModalRegisration } from "../Auth/ModalReg";
import { useState } from "react";
import { ModalLogin } from "../Auth/ModalLog";
import sprite from '../../assets/sprite.svg'


export const AuthNav = () => {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false);
    



    return (
        <Container>
            <Login onClick={() => {
              setIsOpenModalLogin(true);}}><svg width='20px' height='20px'>
              <use xlinkHref={sprite + '#icon-log-in'} />
          </svg> Log in</Login>
            <Registation onClick={() => {
              setIsOpenModalRegistration(true);}}>Registration</Registation>
               <ModalRegisration 
            isOpenModalRegistration={isOpenModalRegistration} 
            setIsOpenModalRegistration={setIsOpenModalRegistration}/>
            <ModalLogin  isOpenModalLogin={isOpenModalLogin} 
            setIsOpenModalLogin={setIsOpenModalLogin} />
        </Container>
    )
}