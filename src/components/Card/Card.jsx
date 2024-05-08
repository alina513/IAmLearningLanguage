import {
  Wrapper,
  Photo,
  ContainerPhoto,
  ContainerText,
  ContainerLang,
  TitleLang,
  ItemLanguage,
  ListLanguage,
  Text,
  TitleText,
  ContainerItemText,
  ReadMore,
  ListLevel,
  ItemLevel,
  Name,
  TextSpeaks,
  Book
} from './Card.styled';
export const Card = () => {
  return (
    <Wrapper>
      <ContainerPhoto>
        <Photo />
        <ContainerText>
          <ContainerLang>
            <TitleLang>Languages</TitleLang>
            <ListLanguage>
                <ItemLanguage>Lessons online</ItemLanguage>
                <ItemLanguage>Lessons done:</ItemLanguage>
                <ItemLanguage>Rating: </ItemLanguage>
                <ItemLanguage>Price / 1 hour:</ItemLanguage>
            </ListLanguage>
          </ContainerLang>
          <Name>Jane Smith</Name>
          <ContainerItemText>
          <TitleText>Speaks:</TitleText>
          <TextSpeaks> German, French</TextSpeaks>
          </ContainerItemText>
          <ContainerItemText>
          <TitleText>Lesson Info:</TitleText>
          <Text> Lesson Info</Text>
          </ContainerItemText>
          <ContainerItemText>
          <TitleText>Conditions: </TitleText>
          <Text> German, French</Text>
          </ContainerItemText>
          <ReadMore>Read more</ReadMore>
          <ListLevel>
            <ItemLevel>
            #A1 Beginner
            </ItemLevel>
            <ItemLevel>
            #A1 Beginner
            </ItemLevel>
          </ListLevel>
          <Book>Book trial lesson</Book>
        </ContainerText>
      </ContainerPhoto>
    </Wrapper>
  );
};
