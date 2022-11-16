import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/system/Stack";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUser, singWithGoogle } from "../auth/firebase";
import { AuthContext } from "../contex/GlobalContext";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  
  const handleCreate = (e) => {
    e.preventDefault()
    const displayName = `${firstName} ${lastName}`   

    console.log("displayName", displayName)
    CreateUser(email, password, navigate, displayName,setCurrentUser,setMessage)
    // loginStatus()
  }

//?Google ile giriş
  
  const handleGoogle = () => {
    singWithGoogle(navigate)
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

      >
        <Box component="form">
          <TextField
            required
            
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
            sx={{ textAling: "center" }}
            error
            id="standard-error-helper-text"
            label="FirstName"
            // helperText="Incorrect entry."
            variant="standard"
            type="text"
          />
        </Box>
        <Box>
          <TextField
            required
            // warning="true"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            sx={{ textAling: "center" }}
            error
            id="standard-error-helper-text1"
            label="LastName"
            // helperText="Incorrect entry."
            variant="standard"
            type="text"
          />
        </Box>
        <Box>
          <TextField
            required
            // warning="true"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            sx={{ textAling: "center" }}
            error
            id="standard-error-helper-text2"
            label="Email"
            // helperText="Incorrect entry."
            variant="standard"
            type="email"
          />
        </Box>

        <Box>
          <TextField
            required
            // warning="true"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="standard-error-helper-text3"
            label="Password"
            helperText={message}
            variant="standard"
            type="password"
          />
        </Box>

        <Stack spacing={2} direction="row" mt={4} justifyContent="center">
          <Button onClick={handleCreate} variant="contained" type="submit">
            CREATE ACCOUNT
          </Button>
          <Button onClick={handleGoogle} variant="outlined">
            COUNTUNE WİTH GOOGLE
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
