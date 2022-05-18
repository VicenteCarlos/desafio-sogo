import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { StyledForm } from "./style";
import { formSchema } from "./schema";
import { formTheme } from "../../themes";
import { useState } from "react";
import { useFormContext } from "../../providers/FormProvider";

const RegisterContractForm = () => {
  const [number, setNumber] = useState("");
  const [date_register, setDateRegister] = useState("");
  const [date_validate, setDateValidate] = useState("");
  const [name_people, setNamePeople] = useState("");
  const [cpf_people, setCpfPeople] = useState("");
  const [endereço_people, setEndereçoPeople] = useState("");

  const { addContract } = useFormContext();

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
          label={errors.number ? errors.number.message : "Número Contrato"}
          variant="filled"
          margin="dense"
          color={errors.number ? "warning" : "primary"}
          {...register("number")}
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          label={
            errors.date_register
              ? errors.date_register.message
              : "Data de Registro Contrato"
          }
          variant="filled"
          margin="dense"
          color={errors.date_register ? "warning" : "primary"}
          {...register("date_register")}
          onChange={(e) => setDateRegister(e.target.value)}
        />
        <TextField
          label={
            errors.date_validate
              ? errors.date_validate.message
              : "Data de Validade do Contrato (/*/*/*/ à /*/*/*/)"
          }
          variant="filled"
          margin="dense"
          color={errors.date_validate ? "warning" : "primary"}
          {...register("date_validate")}
          onChange={(e) => setDateValidate(e.target.value)}
        />
        <p>Digite os dados da Pessoa a ser Contratada: </p>
        <TextField
          label={errors.name_people ? errors.name_people.message : "Nome"}
          variant="filled"
          margin="dense"
          color={errors.name_people ? "warning" : "primary"}
          {...register("name_people")}
          onChange={(e) => setNamePeople(e.target.value)}
        />
        <TextField
          label={errors.cpf_people ? errors.cpf_people.message : "CPF"}
          variant="filled"
          margin="dense"
          color={errors.cpf_people ? "warning" : "primary"}
          {...register("cpf_people")}
          onChange={(e) => setCpfPeople(e.target.value)}
        />
        <TextField
          label={
            errors.endereço_people ? errors.endereço_people.message : "Endereço"
          }
          variant="filled"
          margin="dense"
          color={errors.endereço_people ? "warning" : "primary"}
          {...register("endereço_people")}
          onChange={(e) => setEndereçoPeople(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() =>
            addContract({
              number,
              date_register,
              date_validate,
              name_people,
              cpf_people,
              endereço_people,
            })
          }
        >
          Cadastrar
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};

export { RegisterContractForm };
