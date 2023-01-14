import React from 'react';
import { StyledPagination } from './Pagination.styled';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const CustomPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setSearchParams({ search, page: value });
  };

  return (
    <Stack spacing={2}>
      <StyledPagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
};
