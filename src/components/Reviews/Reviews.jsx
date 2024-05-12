import { Descr, RevList, Revitem, Container, Reiting, Name, Photo, Rew, ContainerReit } from './Reviews.styled';
import { nanoid } from 'nanoid';
import sprite from "../../assets/sprite.svg"

export const Reviews = ({value}) => {
  
  return (
    <>
      <Descr>
        {value.experience}
      </Descr>
      <RevList>{value.reviews.map(review => <Revitem review={review} key = {nanoid()}>
            <Container review={review}>
                <Photo></Photo>
                <ContainerReit>
                    <Name>{review.reviewer_name}</Name>
                    <Reiting><svg width='16px' height='16px'>
              <use xlinkHref={sprite + '#icon-star'} />
          </svg>{review.reviewer_rating}</Reiting>
                </ContainerReit>
            </Container>
            <Rew>{review.comment}</Rew>
        </Revitem> )}
        
      </RevList>
    </>
  );
};
