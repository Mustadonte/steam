import { Header } from 'components/Header/Header';
import { MainContainer } from 'Container/Container';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
};
