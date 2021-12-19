import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { fadeOutVariants } from "../utils/variants";
import Grid from "./Grid";

const StyledMain = styled(motion.main)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = ({
  movies,
  setActiveMovie,
  activeMovie,
  animateCondition,
  setMode,
}) => {
  return (
    <StyledMain
      initial={false}
      variants={fadeOutVariants}
      animate={animateCondition}
    >
      <Grid
        movies={movies}
        setActiveMovie={setActiveMovie}
        activeMovie={activeMovie}
        setMode={setMode}
      />
    </StyledMain>
  );
};

export default Main;
