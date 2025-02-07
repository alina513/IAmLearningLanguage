import { Card } from '../Card/Card';
import { nanoid } from 'nanoid';

export const FavoriteList = ({ favorites }) => {
  return (
    <ul>
      {favorites.map(favorite => (
        <Card value={favorite} key={nanoid()} />
      ))}
    </ul>
  );
};
