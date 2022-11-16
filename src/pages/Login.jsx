import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/system/Stack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword, SingInUser } from "../auth/firebase";
// import { Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const hangleSingin = () => {
    SingInUser(email, password, navigate, setError, setMessage);
  };
  
  const handleResetPassword = () => {
    resetPassword(email,setError, setMessage)

  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="on"
      >
        <div>
          <TextField
            error
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="standard-error-helper-text5"
            label="Email"
            // helperText="Incorrect entry."
            variant="standard"
            type="email"
            // component="input"
          />
        </div>

        <div>
          <TextField
            error
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            // warning
            id="standard-error-helper-text"
            label="Password"
            helperText={message}
            variant="standard"
            type="password"
          />
        </div>

        <Stack spacing={2} direction="row" mt={4} justifyContent="center">
          <Button onClick={hangleSingin} variant="contained">
            LOGİN
          </Button>
          <Button onClick={(e) => navigate("/register")} variant="outlined">
            REGİSTER
          </Button>
          {error && (
            <Button onClick={handleResetPassword} variant="outlined">
              Forget Password
            </Button>
          )}
        </Stack>
        {/* <Typography variant="h5" component="p">{ message}</Typography> */}
      </Box>
    </Box>
  );
};

export default Login;
