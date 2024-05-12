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
  GreenContainer,
  PriceSpan,
} from './Card.styled';
import { ModalTrial } from '../BookTrial/Modal';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Reviews } from '../Reviews/Reviews';

export const Card = ({ value }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [isOpenModalBook, setIsOpenModalBook] = useState(false);
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const notify = () => toast('You must log in');
  const isFav = () => {
    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    const itemIndex = storedItems.findIndex(item => item.name === value.name);
    console.log('index', itemIndex);
    if (itemIndex !== -1) {
      setIsFavorite(true);
    }
    return;
  };

  // useEffect(() => {
  //   const storedShowBookButton = JSON.parse(localStorage.getItem('showBookButton'));
  //   if (storedShowBookButton !== null) {
  //     setShowMore(storedShowBookButton);
  //   }
  // }, []);

  useEffect(() => {
    isFav();
  }, );

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
          <Photo src={value.avatar_url} />
          <Green width="12px" height="12px">
            <use xlinkHref={sprite + '#icon-Group'} />
          </Green>
        </GreenContainer>
        <ContainerText>
          <ContainerLang>
            <TitleLang>Languages</TitleLang>
            <ListLanguage>
              <ItemLanguage>
                <svg width="16px" height="16px">
                  <use xlinkHref={sprite + '#icon-book'} />
                </svg>
                Lessons online
              </ItemLanguage>
              <ItemLanguage>Lessons done:{value.lessons_done}</ItemLanguage>
              <ItemLanguage>
                <svg width="16px" height="16px">
                  <use xlinkHref={sprite + '#icon-star'} />
                </svg>
                Rating: {value.rating}
              </ItemLanguage>
              <ItemLanguage>
                Price / 1 hour:<PriceSpan>{value.price_per_hour}$</PriceSpan>{' '}
              </ItemLanguage>
            </ListLanguage>
            <HeartButton
              type="submit"
              onClick={IsLoggedIn ? toggleItemInLocalStorage : notify}
            >
              <svg width="26px" height="26px">
                <use
                  xlinkHref={
                    sprite +
                    (IsLoggedIn
                      ? isFavorite
                        ? '#icon-heart-yellow'
                        : '#icon-heart'
                      : '#icon-heart')
                  }
                />
              </svg>
            </HeartButton>
          </ContainerLang>
          <Name>{value.name}</Name>
          <ContainerItemText>
            <TitleText>Speaks:</TitleText>
            <TextSpeaks>{value.languages.join(', ')}</TextSpeaks>
          </ContainerItemText>
          <ContainerItemText>
            <TitleText>Lesson Info:</TitleText>
            <Text> {value.lesson_info}</Text>
          </ContainerItemText>
          <ContainerItemText>
            <TitleText>Conditions: </TitleText>
            <Text> {value.conditions}</Text>
          </ContainerItemText>
          {showMore && (
            <ReadMore to="reviews" onClick={handleReadMoreClick}>
              Read more
            </ReadMore>
          )}
          {!showMore && <Reviews value={value} />}
          <ListLevel>
            {value.levels.map(level => (
              <ItemLevel key={nanoid()}>{level}</ItemLevel>
            ))}
          </ListLevel>
          {!showMore && (
            <Book
              onClick={() => {
                setIsOpenModalBook(true);
              }}
            >
              Book trial lesson
            </Book>
          )}
        </ContainerText>
      </ContainerPhoto>
      <ModalTrial
        isOpenModalBook={isOpenModalBook}
        setIsOpenModalBook={setIsOpenModalBook}
        avatar={value.avatar_url}
        name={value.name}
        surname={value.surname}
      />
    </Wrapper>
  );
};
