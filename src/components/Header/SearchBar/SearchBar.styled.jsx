import styled from 'styled-components';
import theme from 'theme';

export const SearchInput = styled.input`
  width: 602px;
  height: 37px;
  padding-left: 15px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.main};
  color: ${p => p.theme.color.mainText};
  background-color: ${p => p.theme.backgroundColors.header};
  border-radius: ${p => p.theme.radii.header};
  caret-color: #fff;

  @media screen and (min-width: ${p => p.theme.tablet}) {
    width: 100%;
    height: 31px;
  }

  ::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: ${p => theme.fontSizes.main};
    color: ${p => p.theme.color.mainText};
  }
`;
