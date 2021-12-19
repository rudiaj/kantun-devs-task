import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.h1)`
  font-family: "Rubik", sans-serif;
  font-size: 8.35vh;
  margin: 11.64vh 0;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.displayDark};
`;

export const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.display};
`;

export const FloatingButton = styled(motion.button)`
  z-index: 2;
  position: fixed;
  top: ${({ top }) => top ?? "initial"};
  right: ${({ right }) => right ?? "initial"};
  bottom: ${({ bottom }) => bottom ?? "initial"};
  left: ${({ left }) => left ?? "initial"};
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 14%),
    0px 1px 18px 0px rgb(0 0 0 / 12%), 0px 3px 5px -1px rgb(0 0 0 / 20%);
`;
