import { ListSort } from './ListSort/ListSort';
import { Logo } from './Logo/Logo';
import { NavLinks } from './NavLinks/NavLinks';
import { OrderSelection } from './OrderSelection/OrderSelection';
import { SearchBar } from './SearchBar/SearchBar';
import { StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <OrderSelection />
      <ListSort />
      <NavLinks />
    </StyledHeader>
  );
};
