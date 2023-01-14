import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const AppsListItemWrapper = styled.div`
  width: 263px;
  height: 209px;
  background-color: #17323a;
  border-radius: 10px;
`;

export const AppsListItemImg = styled.img`
  width: 100%;
  height: 99px;
  margin-bottom: 6px;
  border-radius: 10px 10px 0px 0px;
`;

export const AppsListItemTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 11px;
  color: ${p => p.theme.color.mainText};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.cardTitle};
  line-height: ${p => p.theme.lineHeights.cardTitle};
`;

export const AppsListItemReleased = styled.p`
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 11px;
  color: ${p => p.theme.color.mainText};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.cardRelease};
  line-height: ${p => p.theme.lineHeights.cardRelease};
`;

export const AppsListItemPrice = styled.p`
  margin-top: 0px;
  margin-bottom: 6px;
  margin-left: 11px;
  color: ${p => p.theme.color.mainText};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.cardPrice};
  line-height: ${p => p.theme.lineHeights.cardPrice};
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
`;
