import { Wrapper, Link, Text, Title, Span } from "./HomeBar.styled";
export const HomeBar = () => {
    return(
        <>
        <Wrapper>
          <Title>Unlock your potential with the best  <Span>language</Span> tutors</Title> 
          <Text>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</Text>
          <Link to="/teachers">Get started</Link> 
        </Wrapper>
        </>
    )
}