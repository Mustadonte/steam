import styled from 'styled-components';

export const StyledNavLinkContainer = styled.div`
  display: flex;
  width: 134px;
  height: 37px;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.backgroundColors.header};
  color: ${p => p.theme.color.mainText};
  border-radius: ${p => p.theme.radii.header};
`;

export const StyledNavLinkList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  gap: 10px;
`;

export const StyledNavLinkListItem = styled.li`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.main};
  color: ${p => p.theme.color.mainText};
  cursor: pointer;
`;
