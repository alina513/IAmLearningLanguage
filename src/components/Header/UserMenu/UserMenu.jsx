import {LinkNav, ContainerNav} from "./UserMenu.styled"

export const UserMenu = () => {
  return (
      <ContainerNav>
         <LinkNav to="/">Home</LinkNav>
       <LinkNav to="/teachers">Teachers</LinkNav>
        <LinkNav to="/favorites">Favorites</LinkNav>
      </ContainerNav>
  );
};
