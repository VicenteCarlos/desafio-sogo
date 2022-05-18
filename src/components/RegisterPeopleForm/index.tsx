import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { StyledForm } from "./style";
import { formSchema } from "./schema";
import { formTheme } from "../../themes";
import { useFormContext } from "../../providers/FormProvider";
import { useState } from "react";

const RegisterPeopleForm = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereço, setEndereço] = useState("");

  const { addPeople } = useFormContext();

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
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label={errors.cpf ? errors.cpf.message : "CPF"}
          variant="filled"
          margin="dense"
          color={errors.cpf ? "warning" : "primary"}
          {...register("cpf")}
          onChange={(e) => setCpf(e.target.value)}
        />
        <TextField
          label={
            errors.endereço ? errors.endereço.message : "Endereço (Completo)"
          }
          variant="filled"
          margin="dense"
          color={errors.endereço ? "warning" : "primary"}
          {...register("endereço")}
          onChange={(e) => setEndereço(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() => addPeople({ name, cpf, endereço })}
        >
          Cadastrar
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};

export { RegisterPeopleForm };
