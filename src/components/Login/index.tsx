import { Box, TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { style } from "./styles";
import { useUser } from "../../providers/Users";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserData } from "../../providers/Users/index";
import { useCart } from "../../providers/Cart";
import { useProducts } from "../../providers/Products";
// import { useEffect } from "react";

const LoginComponent = () => {
  // useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const history = useHistory();
  const { login } = useUser();
  const { getProducts } = useProducts();
  // const { createCart } = useCart();
  const userSchema = yup.object({
    email: yup.string().nullable().notRequired().email(),
    password: yup.string().nullable().notRequired(),
  });

  const { register, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(userSchema),
  });

  const handleButton = (data: UserData) => {
    login(data);
    getProducts();
  };
  return (
    <Box sx={style}>
      <Box className="">
        <Box>
          <Typography>BurguerKenzie</Typography>
        </Box>
        <Box>{/* Slogan */}</Box>
      </Box>
      <Box>
        <Typography>Login</Typography>
        <form onSubmit={handleSubmit(handleButton)}>
          <TextField
            margin="normal"
            variant="outlined"
            label="E-mail"
            {...register("email")}
          ></TextField>
          <TextField
            margin="normal"
            variant="outlined"
            label="Senha"
            {...register("password")}
          ></TextField>
          <Button type="submit" variant="contained">
            Logar
          </Button>
        </form>
        <Typography
          className="toRegister"
          onClick={() => history.push("/register")}
        >
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginComponent;
