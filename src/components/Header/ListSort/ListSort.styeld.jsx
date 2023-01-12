import styled from 'styled-components';
import arrow from '../../../images/arrow.svg';

export const ListSortWrapper = styled.div`
  position: relative;

  width: 189px;
  ::after {
    position: absolute;
    content: '';
    color: red;
    width: 28.21px;
    right: 15px;
    top: 5px;
    height: 34px;
    padding: 15px 0px 0px 8px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

export const StyledListSort = styled.label`
  width: 100%;
  background-color: ${p => p.theme.backgroundColors.header};
  border-radius: ${p => p.theme.radii.header};
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 36px;
  padding-left: 11px;
  padding-right: 18px;
  appearance: none;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.main};
  background-color: ${p => p.theme.backgroundColors.header};
  border-radius: ${p => p.theme.radii.header};
  color: ${p => p.theme.color.mainText};
  cursor: pointer;
`;

export const StyledOption = styled.option`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.main};
  background-color: ${p => p.theme.backgroundColors.header};
  color: ${p => p.theme.color.mainText};
`;
