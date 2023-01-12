import {
  StyledOrderSelectionImg,
  StyledOrderSelectioBg,
} from './OrderSelection.styled';
import Order_selection from './Order_selection.png';

export const OrderSelection = () => {
  return (
    <StyledOrderSelectioBg>
      <StyledOrderSelectionImg
        src={Order_selection}
        alt="Order selection icon"
      />
    </StyledOrderSelectioBg>
  );
};
