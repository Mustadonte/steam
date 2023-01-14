import {
  AppsListItemWrapper,
  AppsListItemImg,
  AppsListItemTitle,
  AppsListItemReleased,
  AppsListItemPrice,
  NavItem,
} from './AppsListItem.styeld';

export const AppsListItem = ({ id, imgUrl, title, released, price }) => {
  return (
    <li key={id}>
      <AppsListItemWrapper>
        <NavItem to={`/games/${id}`}>
          <AppsListItemImg src={imgUrl} alt="Game logo image" />
          <AppsListItemTitle>{title}</AppsListItemTitle>
          <AppsListItemReleased>{released}</AppsListItemReleased>
          <AppsListItemPrice>{price}</AppsListItemPrice>
        </NavItem>
      </AppsListItemWrapper>
    </li>
  );
};
