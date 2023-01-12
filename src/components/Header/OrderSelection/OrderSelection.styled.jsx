import styled from 'styled-components';

export const StyledOrderSelectionImg = styled.img`
  width: 32.47px;
  height: 32.47px;

  @media screen and (min-width: ${p => p.theme.tablet}) {
    width: 28.96px;
    height: 27.06px;
  }
`;

export const StyledOrderSelectioBg = styled.div`
  display: flex;
  background-color: ${p => p.theme.backgroundColors.header};
  border-radius: ${p => p.theme.radii.header};
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 36px;
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.tablet}) {
    width: 33px;
    height: 30px;
  }
`;
