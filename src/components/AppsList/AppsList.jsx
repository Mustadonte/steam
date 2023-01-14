import { useSelector } from 'react-redux';
import { getApps, isAppsLoading } from 'Redux/apps/apps-selector';
import { AppsListItem } from 'components/AppsListItem/AppsListItem';
import { StyledAppsList } from './AppsList.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CustomPagination } from 'components/Pagination/Pagination';
import { MainContainer } from 'Container/Container';
import { useDispatch } from 'react-redux';
import { fetchGames } from 'Redux/apps/apps-operations';
import { Loader } from 'components/Loader/Loader';
import { sortOrder, sortParameter } from 'Redux/sort/sort-selectors';
export const AppsList = () => {
  const appsList = useSelector(getApps);
  const loading = useSelector(isAppsLoading);
  const listOrder = useSelector(sortOrder);
  const sortBy = useSelector(sortParameter);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const currentPage = searchParams.get('page');
  const search = searchParams.get('search');
  const page = currentPage ? currentPage : 1;
  useEffect(() => {
    if (search) {
      const query = {
        search,
        page,
      };
      dispatch(fetchGames(query));
    }
    return;
  }, [dispatch, page, search]);

  return (
    <MainContainer>
      {loading && <Loader />}
      <StyledAppsList>
        {appsList
          ?.map(app => {
            return (
              <AppsListItem
                key={app.appId}
                imgUrl={app.imgUrl}
                title={app.title}
                released={app.released}
                price={app.price}
                id={app.appId}
              />
            );
          })
          .sort((a, b) => {
            const aPrice = Number(a.props.price.replace(/[^0-9.-]+/g, ''));
            const bPrice = Number(b.props.price.replace(/[^0-9.-]+/g, ''));
            const aDate = a.props.id;
            const bDate = b.props.id;
            switch (sortBy) {
              case 'Price':
                return listOrder === 'ascending'
                  ? aPrice - bPrice
                  : bPrice - aPrice;

              case 'Publish_Date':
                return listOrder === 'ascending'
                  ? aDate - bDate
                  : bDate - aDate;
              default:
                return b - a;
            }
          })}
      </StyledAppsList>

      {appsList?.length > 0 && <CustomPagination />}
    </MainContainer>
  );
};
