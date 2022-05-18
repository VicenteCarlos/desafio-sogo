import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("Campo requirido"),
  cpf: yup
    .string()
    .required("Campo requirido")
    .max(11, "CPF deve ter 11 Caracteres")
    .min(11, "CPF deve ter 11 Caracteres"),
  endereço: yup.string().required("Campo requirido"),
});

export { formSchema };
