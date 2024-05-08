import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { Container } from "./AppBar.styled";
export const AppBar = () => {
    return (
        <Container>
        <Navigation/>
        <AuthNav/>
        </Container>
    )
}