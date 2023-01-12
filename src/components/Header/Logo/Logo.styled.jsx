import styled from 'styled-components';

export const StyledLogoImg = styled.img`
  width: 150px;
  height: 34.77px;

  @media screen and (min-width: ${p => p.theme.tablet}) {
    width: 144px;
    height: 35px;
  }
`;
