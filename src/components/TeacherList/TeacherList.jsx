import { nanoid } from 'nanoid';
import { Card } from '../Card/Card';

export const TeachersList = ({ teachers }) => {
  return (
    <ul>
      {teachers?.map(teacher => (
        <Card value={teacher} key={nanoid()} />
      ))}
    </ul>
  );
};
