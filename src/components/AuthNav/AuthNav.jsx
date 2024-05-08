import { Registation, Container, Login } from "./AuthNav.styled"
export const AuthNav = () => {
    return (
        <Container>
            <Login>Log in</Login>
            <Registation>Registration</Registation>
        </Container>
    )
}