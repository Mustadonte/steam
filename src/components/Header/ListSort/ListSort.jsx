import {
  ListSortWrapper,
  StyledListSort,
  StyledOption,
  StyledSelect,
} from './ListSort.styeld';

import { useDispatch } from 'react-redux';
import { sortBy } from 'Redux/sort/sort-slice';

export const ListSort = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(sortBy(e.target.value));
  };

  return (
    <ListSortWrapper>
      <StyledListSort htmlFor="listSort">
        <StyledSelect name="listSort" onChange={handleChange}>
          <StyledOption value="Price">Price</StyledOption>
          <StyledOption value="Publish_Date">Publish Date</StyledOption>
        </StyledSelect>
      </StyledListSort>
    </ListSortWrapper>
  );
};
