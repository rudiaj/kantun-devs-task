import { motion } from "framer-motion";
import React, { useCallback } from "react";
import styled from "styled-components";

import { handleInputChange } from "../../utils/helpers";
import { fadeUpVariants } from "../../utils/variants";

const StyledInput = styled(motion.input)`
  border: none;
  background: transparent;
  outline: none;
  font-size: 11.48125vh;
  margin: 5.740625vh 4.95vw;
  font-family: "Rubik", sans-serif;
  font-size: 8.35vh;
  margin: 11.64vh 0;
  line-height: 1.6;
  width: 100%;
  text-align: center;
  padding: 0 4.95vw;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => props.theme.colors.display};
  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

const inputFadeUpVariants = fadeUpVariants({});

const TextInput = ({ value, onChange, name, animateCondition }) => {
  const memoedOnChange = useCallback(
    (event) => handleInputChange(event.target.value, name, onChange),
    [name, onChange]
  );

  return (
    <StyledInput
      initial={false}
      variants={inputFadeUpVariants}
      animate={animateCondition}
      id={name}
      type="text"
      value={value}
      autoComplete="off"
      placeholder="Movie name"
      onChange={memoedOnChange}
    />
  );
};

export default TextInput;
