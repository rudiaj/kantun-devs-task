import { motion } from "framer-motion";
import React, { useCallback } from "react";
import styled from "styled-components";

import { modeValues } from "../utils/constants";
import { gridVariants } from "../utils/variants";
import GridItem from "./GridItem";

const StyledGrid = styled(motion.ul)`
  max-width: 60rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.875rem;
  width: 80%;
`;

const Grid = ({ movies, setActiveMovie, activeMovie, setMode }) => {
  const onClick = useCallback(
    (movie) => {
      if (activeMovie === null) {
        setMode(modeValues.edit);
        setActiveMovie(movie);
      } else {
        setMode(null);
        setActiveMovie(null);
      }
    },
    [activeMovie, setMode, setActiveMovie]
  );

  return (
    <StyledGrid variants={gridVariants} initial="hidden" animate="show">
      {movies.map((movie) => (
        <GridItem movie={movie} key={movie.id} onClick={onClick} />
      ))}
    </StyledGrid>
  );
};

export default Grid;
