
import { nanoid } from 'nanoid';
import { Card } from '../Card/Card';
import { List } from './TeacherList.styled';

export const TeachersList = ({ teachers }) => {
  return (
    <List>
      {teachers?.map(teacher => (
        <Card value={teacher} key={nanoid()} />
      ))}
    </List>
  );
};
