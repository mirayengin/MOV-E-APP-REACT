import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ randomFilms }) => {
  const navigate = useNavigate();
  // console.log(randomFilms);
  return (
    <Grid container spacing={4} sx={{ mt: 4, p: 5 }}>
      {randomFilms?.map((item) => {
        const { vote_average, title, poster_path, overview, id } = item;
        return (
          <Grid item container key={id} xs={12} sm={6} md={4} lg={3}>
            {/* <Card  sx={{position:"relative",display:"flex", justifyContent:"end", alignItems:"center", flexDirection:"column"}}> */}
            <Card id="hoverPlace" sx={{ position: "relative", overflow:"hidden" }}>
              <CardMedia
                
                component="img"
                alt="green iguana"
                height="480"
                image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
              />
              <CardContent >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "3rem",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: "yellow",
                      paddingX: "0.2rem",
                      width: "2rem",
                      textAlign: "center",
                    }}
                    variant="h6"
                    component="div"
                  >
                    {vote_average}
                  </Typography>
                </Box>
                <CardActions >
                  <Typography
                    id="overview"
                    sx={{
                      position: "absolute",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      color: "#000",
                      bottom: "126px",
                      left: "0",
                      right: "0",
                      overflow: "auto",
                      maxHeight: "100%",
                      padding: "1rem",
                      transform: "translateX(100%)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    variant="body2"
                    component="div"
                    color="text.secondary"
                  >
                    {overview}
                  </Typography>
                </CardActions>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
                <Button
                  onClick={(e) => navigate(`details/:${id}`)}
                  sx={{ backgroundColor: "purple" }}
                  size="small"
                >
                  Detail
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieCard;
