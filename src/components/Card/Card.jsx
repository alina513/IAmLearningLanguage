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
  Book,
  HeartButton,
  Green,
  GreenContainer
} from './Card.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


export const Card = ({value}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const isFav = ()=>{
    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    const itemIndex = storedItems.findIndex(item => item.name === value.name);
    console.log("index",itemIndex);
    if (itemIndex!== -1) {
      setIsFavorite(true);
    }
    return
  }
  useEffect(() => {
    isFav()
  },)


  const toggleItemInLocalStorage = () => {
    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    if (storedItems.length === 0) {
        storedItems.push(value);
        setIsFavorite(true);
    } else {
        const itemIndex = storedItems.findIndex(item => item.name === value.name);
        
        if (itemIndex === -1) {
            storedItems.push(value);
            setIsFavorite(true);
        } else {
            storedItems.splice(itemIndex, 1);
            setIsFavorite(false);
        }
    }
    
    localStorage.setItem('storedItems', JSON.stringify(storedItems));
};

const handleReadMoreClick = () => {
  setShowMore(false);
};
  

  return (
    <Wrapper>
      <ContainerPhoto>
        <GreenContainer>
        <Photo src={value.avatar_url}/>
        <Green width='12px' height='12px'>
              <use xlinkHref={sprite + '#icon-Group'}/></Green>
        </GreenContainer>
        <ContainerText>
          <ContainerLang>
            <TitleLang>Languages</TitleLang>
            <ListLanguage>
                <ItemLanguage>Lessons online</ItemLanguage>
                <ItemLanguage>Lessons done:</ItemLanguage>
                <ItemLanguage><svg width='16px' height='16px'>
              <use xlinkHref={sprite + '#icon-star'} />
          </svg>Rating: </ItemLanguage>
                <ItemLanguage>Price / 1 hour:</ItemLanguage>
            </ListLanguage>
            <HeartButton type='submit' onClick={toggleItemInLocalStorage}><svg width='26px' height='26px'>
              <use xlinkHref={sprite + (isFavorite ?'#icon-heart-yellow' :'#icon-heart')} />
          </svg></HeartButton>
          </ContainerLang>
          <Name>{value.name}</Name>
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
          {showMore && <ReadMore to="reviews" onClick={handleReadMoreClick}>Read more</ReadMore>}
          <Outlet/>
          <ListLevel>
            <ItemLevel>
            #A1 Beginner
            </ItemLevel>
            <ItemLevel>
            #A1 Beginner
            </ItemLevel>
          </ListLevel>
          {!showMore&&<Book>Book trial lesson</Book>}
        </ContainerText>
      </ContainerPhoto>
    </Wrapper>
  );
};
