import React from "react";
import { useEffect, useState } from "react";

import Header from "../components/common/Header";
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import Slide from "../components/Slide";

import { categoryMovies } from "../components/services/api";
import { NOWPLAYING_API_URL } from "../constant/constant";

import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px;
`;

const Components = styled(Box)`
  padding: 0 115px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Components>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
      </Components>
    </>
  );
};

export default Home;
