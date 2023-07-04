import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box } from "@mui/material";
import { AuthContext } from "../../contexts/Auth";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const response = await login(email, password);

    if (response?.status === 401) {
      return;
    }
    navigate("/products");
  });

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <form onSubmit={onSubmit}>
          <TextField
            {...register("email")}
            label="Email"
            type="email"
            required
            margin="normal"
            fullWidth
          />
          <TextField
            {...register("password")}
            label="Password"
            type="password"
            required
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
