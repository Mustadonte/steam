import { getGameById } from 'API/ApiService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  DetailsWrapper,
  DetailsTitle,
  StyledImgDetails,
  StyledDesc,
  StyledPrice,
  StyledReleased,
} from './AppDetails.styled';
import { Loader } from 'components/Loader/Loader';
export const AppDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchGameById = async gameId => {
      const game = await getGameById(gameId);
      setGame(game);
    };

    fetchGameById(gameId)
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [gameId]);

  const { imgUrl, description, price, released, title } = game;

  return (
    <>
      {isLoading && <Loader />}
      {game && (
        <DetailsWrapper>
          <DetailsTitle>{title}</DetailsTitle>
          <StyledImgDetails src={imgUrl} alt={title} />
          <StyledDesc>{description}</StyledDesc>
          <StyledPrice>{price}</StyledPrice>
          <StyledReleased>{released}</StyledReleased>
        </DetailsWrapper>
      )}
    </>
  );
};
