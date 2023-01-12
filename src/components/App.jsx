import { MainContainer } from 'Container/Container';
import { AppsList } from './AppsList/AppsList';
import { Header } from './Header/Header';
export const App = () => {
  return (
    <MainContainer>
      <Header />
      <AppsList />
    </MainContainer>
  );
};
