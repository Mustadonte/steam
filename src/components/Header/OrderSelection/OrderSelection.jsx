import { useSelector, useDispatch } from 'react-redux';
import { sortOrder } from 'Redux/sort/sort-selectors';
import { order } from 'Redux/sort/sort-slice';
import {
  StyledOrderSelectionImg,
  StyledOrderSelectioBg,
} from './OrderSelection.styled';
import Order_selection from './Order_selection.png';

export const OrderSelection = () => {
  const dispatch = useDispatch();
  const listOrder = useSelector(sortOrder);

  const clickHandler = () => {
    if (listOrder === 'ascending') {
      dispatch(order('descending'));
    }
    if (listOrder === 'descending') {
      dispatch(order('ascending'));
    }
  };

  return (
    <StyledOrderSelectioBg onClick={clickHandler}>
      <StyledOrderSelectionImg
        src={Order_selection}
        alt="Order selection icon"
      />
    </StyledOrderSelectioBg>
  );
};
