import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Main = () => {
  const [selectInput, setSelectInput] = useState("");
  const [randomFilms, setRandomFilms] = useState([]);

  console.log(selectInput)

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  // console.log(API_KEY);
  const RandomUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const selectUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${selectInput}`;

  //! Sayfa ilk açılınca
  const getRandomFilm = async () => {
    
    const { data } = await axios(RandomUrl);
    setRandomFilms(data.results);
  };

  useEffect(() => {
    getRandomFilm();
  }, []);

  


  //!Search yaptığımızda 
  const handleSearch = () => {
    getSelectFilm()
  }
  const getSelectFilm = async() => {
    const { data } = await axios(selectUrl);
    setRandomFilms(data.results);
  }

 
  

  




  return (
    <>
      <Box
        spacing={2}
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <TextField
          onChange={(e) => setSelectInput(e.target.value)}
          size="small"
          sx={{ width: "20%" }}
          label="Search"
          type="search"
        />
        <Button
          sx={{ ml: 4, backgroundColor: "red" }}
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSearch}
        >
          Send
        </Button>
      </Box>

      <MovieCard randomFilms={randomFilms} />
    </>
  );
};

export default Main;
