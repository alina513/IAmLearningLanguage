import { LinkNav, LinkLogo, Container, ContainerNav } from "./Navigation.styled."
export const Navigation = () => {
    return (
        <Container>
            <LinkLogo to="/">LearnLingo</LinkLogo>
            <ContainerNav>
            <LinkNav to="/">Home</LinkNav>
            <LinkNav to="/teachers">Teachers</LinkNav>
            </ContainerNav>
        </Container>
    )
}