import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';


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
    setSelectInput("");
  }


  const getSelectFilm = async() => {
    const { data } = await axios(selectUrl);
    setRandomFilms(data.results);

  }

 
  

  




  return (
    <div className="mainDiv">
      <Box
        spacing={2}
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 4,
        }}
      >
        <TextField
          onChange={(e) => setSelectInput(e.target.value)}
          size="medium"
          sx={{ width: "20%", border:"none", backgroundColor:"white", boxShadow:"1rem 1rem 1rem 3rem yellow" }}
          label="Search"
          type="search"
          value={selectInput}
          error
          
        />
        <Button
          className=""
          sx={{ ml: 4, backgroundColor: "red", color:"white", fontWeight:"bold" ,boxShadow:"1rem 1rem 1rem 3rem yellow", "&:hover":{background:"white", color:"red"} }}
          size="large"
          // variant="contained"
          endIcon={<SearchIcon />}
          onClick={handleSearch}
        
        >
          Send
        </Button>
      </Box>

      <MovieCard randomFilms={randomFilms} />
    </div>
  );
};

export default Main;
