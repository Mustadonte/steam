import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  width: 500px;
  padding: 0 10px;
  margin: 25px auto;
  border: 1px solid #fff;
  border-radius: ${p => p.theme.radii.detailes};
`;

export const DetailsTitle = styled.h2`
  text-align: center;
  color: ${p => p.theme.color.mainText};
`;

export const StyledImgDetails = styled.img`
  display: block;
  margin: 0 auto;
`;

export const StyledDesc = styled.p`
  text-align: center;
  color: ${p => p.theme.color.mainText};
`;

export const StyledPrice = styled.p`
  color: ${p => p.theme.color.mainText};
`;

export const StyledReleased = styled.p`
  color: ${p => p.theme.color.mainText};
`;
