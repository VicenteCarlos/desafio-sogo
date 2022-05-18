import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import {StyledForm} from "./style"
import { formSchema } from "./schema";
import { formTheme } from "../../themes";

const RegisterPeopleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data: any) => console.log(data);

  return (
    <ThemeProvider theme={formTheme}>
      <StyledForm onSubmit={handleSubmit(formSubmit)}>
        <TextField
          label={errors.name ? errors.name.message : "Nome"}
          variant="filled"
          margin="dense"
          color={errors.name ? "warning" : "primary"}
          {...register("name")}
        />
        <TextField
          label={errors.cpf ? errors.cpf.message : "CPF"}
          variant="filled"
          margin="dense"
          color={errors.cpf ? "warning" : "primary"}
          {...register("cpf")}
        />
        <TextField
          label={
            errors.endereço ? errors.endereço.message : "Endereço (Completo)"
          }
          variant="filled"
          margin="dense"
          color={errors.endereço ? "warning" : "primary"}
          {...register("endereço")}
        />
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};


export { RegisterPeopleForm };
