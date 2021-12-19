import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback } from "react";
import styled from "styled-components";

import {
  bgVariants,
  fadeInVariants,
  imageVariants,
  fadeUpVariants,
} from "../utils/variants";
import Select from "./form/Select";
import Checkbox from "./form/Checkbox";
import { genreOptions, modeValues, ratingOptions } from "../utils/constants";
import { formatToNumber } from "../utils/helpers";
import TextInput from "./form/TextInput";
import API from "../utils/api";
import { FloatingButton } from "./module";

import moviePoster from "../public/movie_placeholder.svg";

const Container = styled.div`
  z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
  pointer-events: ${({ isOpen }) => (isOpen ? "initial" : "none")};
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const ImageContainer = styled(motion.div)`
  width: 34.4vw;
  height: 55.5vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const GreenBG = styled(motion.div)`
  box-sizing: border-box;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  background-color: ${(props) => props.theme.colors.overlayBackground};
  display: flex;
  align-items: flex-end;
`;

const Content = styled(motion.div)`
  padding: 4.835vh 4.95vw;
  display: flex;
  flex-direction: column;
`;

const ActionBar = styled(motion.div)`
  z-index: 1;
  position: absolute;
  border-radius: 26px;
  height: 52px;
  display: flex;
  align-items: center;
  margin-bottom: 24%;
  background-color: ${(props) => props.theme.colors.overlayBackground};
  box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 14%),
    0px 1px 18px 0px rgb(0 0 0 / 12%), 0px 3px 5px -1px rgb(0 0 0 / 20%);
`;

const ActionButton = styled.button`
  color: ${(props) => props.theme.colors.display};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 1.25rem 2.5rem;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const createMovie = async (setMovies, activeMovie, setActiveMovie, setMode) => {
  try {
    const { data } = await API.post("movies", activeMovie);

    setMovies((prev) => [...prev, data]);
    setActiveMovie(null);
    setMode(null);
  } catch (error) {
    console.log("something went wrong");
  }
};

const updateMovie = async (setMovies, activeMovie, setActiveMovie, setMode) => {
  try {
    const { data } = await API.put(`movies/${activeMovie.id}`, activeMovie);

    setMovies((prev) =>
      prev.map((movie) => (movie.id === data.id ? data : movie))
    );

    setActiveMovie(null);
    setMode(null);
  } catch (error) {
    console.log("something went wrong");
  }
};

const removeMovie = async (setMovies, activeMovie, setActiveMovie, setMode) => {
  try {
    await API.delete(`movies/${activeMovie.id}`);

    setMovies((prev) => prev.filter((movie) => movie.id !== activeMovie.id));

    setActiveMovie(null);
    setMode(null);
  } catch (error) {
    console.log("something went wrong");
  }
};

const contentFadeUpVariants = fadeUpVariants({ delay: 0.7 });
const actionBarFadeUpVariants = fadeUpVariants({ delay: 0.8 });

const SingleMovie = ({
  activeMovie,
  animateCondition,
  setActiveMovie,
  setMovies,
  setMode,
  mode,
}) => {
  const onClose = useCallback(() => {
    setActiveMovie(null);
    setMode(null);
  }, [setActiveMovie, setMode]);

  const onSave = useCallback(() => {
    if (mode === modeValues.edit) {
      updateMovie(setMovies, activeMovie, setActiveMovie, setMode);
    } else {
      createMovie(setMovies, activeMovie, setActiveMovie, setMode);
    }
  }, [mode, setMovies, activeMovie, setActiveMovie, setMode]);

  const onRemove = useCallback(
    () => removeMovie(setMovies, activeMovie, setActiveMovie, setMode),
    [setMovies, activeMovie, setActiveMovie, setMode]
  );

  return (
    <Container isOpen={activeMovie}>
      <FloatingButton
        initial={false}
        variants={fadeInVariants}
        animate={animateCondition}
        onClick={onClose}
        top="100px"
        right="100px"
      >
        <Image src="/cross.svg" width="16" height="16" layout="fixed" />
      </FloatingButton>
      <GreenBG
        initial={false}
        variants={bgVariants}
        animate={animateCondition}
        isOpen={activeMovie}
      >
        <Content
          initial={false}
          variants={contentFadeUpVariants}
          animate={animateCondition}
          isOpen={activeMovie}
        >
          <Select
            value={activeMovie?.genre}
            onChange={setActiveMovie}
            name="genre"
            options={genreOptions}
            label="Genre:"
          />
          <Select
            value={activeMovie?.rating}
            onChange={setActiveMovie}
            name="rating"
            options={ratingOptions}
            label="Rating:"
            modifier={formatToNumber}
          />
          <Checkbox
            value={activeMovie?.explicit}
            onChange={setActiveMovie}
            name="explicit"
            label="Explicit:"
          />
        </Content>
      </GreenBG>
      <TextInput
        animateCondition={animateCondition}
        value={activeMovie?.name}
        onChange={setActiveMovie}
        name="name"
      />
      <ImageContainer
        initial={false}
        variants={imageVariants}
        animate={animateCondition}
      >
        <ActionBar
          initial={false}
          variants={actionBarFadeUpVariants}
          animate={animateCondition}
        >
          <ActionButton onClick={onSave}>Save</ActionButton>
          <ActionButton
            disabled={mode === modeValues.create}
            onClick={onRemove}
          >
            Remove
          </ActionButton>
        </ActionBar>
        <Image src={moviePoster} layout="fill" objectFit="cover" />
      </ImageContainer>
    </Container>
  );
};

export default SingleMovie;
