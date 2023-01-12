import logo from './logo.png';
import { StyledLogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <div>
      <StyledLogoImg src={logo} alt="Logo" />
    </div>
  );
};
