import Head from "next/head";
import { useState, useCallback } from "react";
import Image from "next/image";

import Header from "../components/Header";
import Main from "../components/Main";
import { FloatingButton } from "../components/module";
import SingleMovie from "../components/SingleMovie";
import { getAll } from "../db/queries";
import { reverseFadeInVariants } from "../utils/variants";
import { modeValues, newMovie } from "../utils/constants";

export default function Home({ movies: sspMovies }) {
  const [movies, setMovies] = useState(sspMovies);
  const [activeMovie, setActiveMovie] = useState(null);
  const [mode, setMode] = useState(null);
  const animateCondition = activeMovie ? "open" : "closed";

  const onNew = useCallback(() => {
    setActiveMovie(newMovie);
    setMode(modeValues.create);
  }, []);

  return (
    <>
      <Head>
        <title>Movies</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@500&display=swap');
        </style>
      </Head>
      <FloatingButton
        initial={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
        variants={reverseFadeInVariants}
        animate={animateCondition}
        onClick={onNew}
        bottom="100px"
        right="100px"
      >
        <Image src="/plus.svg" width="16" height="16" layout="fixed" />
      </FloatingButton>
      <Header animateCondition={animateCondition} />
      <Main
        movies={movies}
        setActiveMovie={setActiveMovie}
        activeMovie={activeMovie}
        animateCondition={animateCondition}
        setMode={setMode}
      />
      <SingleMovie
        activeMovie={activeMovie}
        animateCondition={animateCondition}
        setActiveMovie={setActiveMovie}
        setMovies={setMovies}
        setMode={setMode}
        mode={mode}
      />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const movies = await getAll();

    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    return [];
  }
}
