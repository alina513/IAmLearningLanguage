
import { List } from "./FavoriteList.styled";
import { Card } from "../Card/Card";
import { nanoid } from "nanoid";

export const FavoriteList = ({favorites}) => {
    return (
        <List>
{favorites.map(favorite => <Card value = {favorite} key = {nanoid()}/>)}
</List>
    )

}