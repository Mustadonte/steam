import {
  ListSortWrapper,
  StyledListSort,
  StyledOption,
  StyledSelect,
} from './ListSort.styeld';

export const ListSort = () => {
  return (
    <ListSortWrapper>
      <StyledListSort htmlFor="listSort">
        <StyledSelect name="listSort">
          <StyledOption value="Price">Price</StyledOption>
          <StyledOption value="Publish_Date">Publish Date</StyledOption>
        </StyledSelect>
      </StyledListSort>
    </ListSortWrapper>
  );
};
