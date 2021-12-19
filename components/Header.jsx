import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { fadeOutVariants } from "../utils/variants";
import { Title } from "./module";

const StyledHeader = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ animateCondition }) => (
  <StyledHeader
    initial={false}
    variants={fadeOutVariants}
    animate={animateCondition}
  >
    <Title>Movies</Title>
  </StyledHeader>
);

export default Header;
