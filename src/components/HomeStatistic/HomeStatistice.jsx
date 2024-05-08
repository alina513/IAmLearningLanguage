import { Container, Number, Description, ContainerStat } from "./HomeStatistice.styled"
export const HomeStatistice = () => {
    return (
        <>
        <Container>
            <ContainerStat>
            <Number>32,000 +</Number>
            <Description>Experienced tutors</Description>
            </ContainerStat>
            <ContainerStat>
            <Number>300,000 +</Number>
            <Description>5-star tutor reviews</Description>
            </ContainerStat>
            <ContainerStat>
            <Number>120 +</Number>
            <Description>Subjects taught</Description>
            </ContainerStat>
            <ContainerStat>
            <Number>200 +</Number>
            <Description>Tutor nationalities</Description>
            </ContainerStat>
        </Container>
        </>
    )
}