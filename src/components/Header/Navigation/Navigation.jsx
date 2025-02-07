import { LinkLogo } from './Navigation.styled.';
import sprite from '../../../assets/sprite.svg';

export const Navigation = () => {
  return (
    <LinkLogo to="/">
      <svg width="28px" height="28px">
        <use xlinkHref={sprite + '#icon-ukraine'} />
      </svg>{' '}
      LearnLingo
    </LinkLogo>
  );
};
