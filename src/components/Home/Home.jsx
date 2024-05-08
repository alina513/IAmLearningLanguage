import { HomeBar } from "../HomeBar/HomeBar";
import { HomePhoto } from "../HomePhoto/HomePhoto";
import { Container, Wrapper } from "./Home.styled";
import { HomeStatistice } from "../HomeStatistic/HomeStatistice";
export const Home = () => {
    return(
        <Wrapper>
        <Container>
        <HomeBar/>
        <HomePhoto/>
        </Container>
        <HomeStatistice/>
        </Wrapper>
    )
}