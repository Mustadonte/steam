import {
  AppsListItemWrapper,
  AppsListItemImg,
  AppsListItemTitle,
  AppsListItemReleased,
  AppsListItemPrice,
} from './AppsListItem.styeld';

export const AppsListItem = ({ imgUrl, title, released, price }) => {
  return (
    <li>
      <AppsListItemWrapper>
        <AppsListItemImg src={imgUrl} alt="Game logo image" />
        <AppsListItemTitle>{title}</AppsListItemTitle>
        <AppsListItemReleased>{released}</AppsListItemReleased>
        <AppsListItemPrice>{price}</AppsListItemPrice>
      </AppsListItemWrapper>
    </li>
  );
};
