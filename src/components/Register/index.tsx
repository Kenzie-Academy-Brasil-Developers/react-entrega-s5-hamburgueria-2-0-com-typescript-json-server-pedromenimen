import { Box, TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { style } from "./styles";
import { useUser } from "../../providers/Users";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserData } from "../../providers/Users/index";
import Slogan from "../Slogan";

const RegisterComponent = () => {
  const history = useHistory();
  const { signUp } = useUser();
  const userSchema = yup.object({
    name: yup.string().nullable().required(),
    email: yup.string().nullable().email(),
    password: yup.string().nullable(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
  });

  const { register, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(userSchema),
  });

  const handleButton = (data: UserData) => {
    const { email, password, name } = data;
    const newData = { email: email, password: password, name: name };
    signUp(newData);
  };
  return (
    <Box sx={style}>
      <Box className="Slogan">
        <Slogan />
      </Box>
      <Box className="Oresto">
        <Typography>Cadastro</Typography>
        <form onSubmit={handleSubmit(handleButton)}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Nome"
            {...register("name")}
          ></TextField>
          <TextField
            margin="normal"
            variant="outlined"
            label="Email"
            {...register("email")}
          ></TextField>
          <TextField
            margin="normal"
            variant="outlined"
            label="Senha"
            {...register("password")}
          ></TextField>
          <TextField
            margin="normal"
            variant="outlined"
            label="Confirmação de Senha"
            {...register("confirmPassword")}
          ></TextField>
          <Button type="submit" variant="contained">
            Logar
          </Button>
        </form>
        <Typography className="toLogin" onClick={() => history.push("/")}>
          Voltar para o Login
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterComponent;
