import { LinkNav, LinkLogo, Container, ContainerNav } from "./Navigation.styled."
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import sprite from '../../assets/sprite.svg'

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <Container>
            <LinkLogo to="/"><svg width='28px' height='28px'>
                <use xlinkHref={sprite + '#icon-ukraine'} />
            </svg> LearnLingo</LinkLogo>
            <ContainerNav>
            <LinkNav to="/">Home</LinkNav>
            <LinkNav to="/teachers">Teachers</LinkNav>
            {isLoggedIn && <LinkNav to="/favorites">Favorites</LinkNav>}
            </ContainerNav>
        </Container>
    )
}