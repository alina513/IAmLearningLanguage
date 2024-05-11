import { selectTeachers } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { List } from "./TeacherList.styled";

export const TeachersList = ({teachers}) => {
    console.log(teachers);
    // const teachers = useSelector(selectTeachers);
    return (
        <List>
{teachers.map(teacher =><Card value = {teacher} key = {nanoid()}/>)}
</List>
    )
}