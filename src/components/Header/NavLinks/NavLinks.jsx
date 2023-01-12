import {
  StyledNavLinkContainer,
  StyledNavLinkList,
  StyledNavLinkListItem,
} from './NavLinks.styled';

export const NavLinks = () => {
  return (
    <StyledNavLinkContainer>
      <StyledNavLinkList>
        <StyledNavLinkListItem>Search</StyledNavLinkListItem>
        <StyledNavLinkListItem>Like list</StyledNavLinkListItem>
      </StyledNavLinkList>
    </StyledNavLinkContainer>
  );
};
