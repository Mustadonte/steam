import { useSelector } from 'react-redux';
import { getApps } from 'Redux/apps-selector';
import { AppsListItem } from 'components/AppsListItem/AppsListItem';
import { StyledAppsList } from './AppsList.styled';
export const AppsList = () => {
  const appsList = useSelector(getApps);
  return (
    <StyledAppsList>
      {appsList.map(app => {
        return (
          <AppsListItem
            key={app.appId}
            imgUrl={app.imgUrl}
            title={app.title}
            released={app.released}
            price={app.price}
          ></AppsListItem>
        );
      })}
    </StyledAppsList>
  );
};
