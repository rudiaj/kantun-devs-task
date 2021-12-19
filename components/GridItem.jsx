import { motion } from "framer-motion";
import React, { useCallback } from "react";
import styled from "styled-components";

import { gridItemVariants } from "../utils/variants";

const StyledGridItem = styled(motion.li)`
  cursor: pointer;
`;

const Image = styled.div`
  background-image: url("/movie_placeholder.svg");
  background-size: cover;
  background-position: center;
  height: 28.5vh;
  margin-bottom: 0.625rem;
`;

const Title = styled.span`
  font-family: "Karla", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.displayDark};
  line-height: 1.4;
`;

const GridItem = ({ movie, onClick }) => {
  const onMemoedClick = useCallback(() => onClick(movie), [onClick, movie]);
  return (
    <StyledGridItem variants={gridItemVariants} onClick={onMemoedClick}>
      <Image className="image" />
      <Title>{movie.name}</Title>
      <span>{movie.text}</span>
    </StyledGridItem>
  );
};

export default GridItem;
