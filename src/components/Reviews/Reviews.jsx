import { Descr, RevList, Revitem, Container, Reiting, Name, Photo, Rew, ContainerReit } from './Reviews.styled';
export const Reviews = () => {
  return (
    <>
      <Descr>
        Jane is an experienced and dedicated language teacher specializing in
        German and French. She holds a Bachelor's degree in German Studies and a
        Master's degree in French Literature. Her passion for languages and
        teaching has driven her to become a highly proficient and knowledgeable
        instructor. With over 10 years of teaching experience, Jane has helped
        numerous students of various backgrounds and proficiency levels achieve
        their language learning goals. She is skilled at adapting her teaching
        methods to suit the needs and learning styles of her students, ensuring
        that they feel supported and motivated throughout their language
        journey.
      </Descr>
      <RevList>
        <Revitem>
            <Container>
                <Photo></Photo>
                <ContainerReit>
                    <Name>Frank</Name>
                    <Reiting>4.0</Reiting>
                </ContainerReit>
            </Container>
            <Rew>Jane's lessons were very helpful. I made good progress.</Rew>
        </Revitem>
      </RevList>
    </>
  );
};
