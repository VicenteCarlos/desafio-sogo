import * as yup from "yup";

const formSchema = yup.object().shape({
    number: yup.string().required("Campo requirido"),
    date_register: yup.string().required("Campo requirido"),
    date_validate: yup.string().required("Campo requirido"),
    name_people: yup.string().required("Campo requirido"),
    cpf_people: yup.string().required("Campo requirido").max(11, "CPF deve ter 11 Caracteres")
        .min(11, "CPF deve ter 11 Caracteres"),
    endereço_people: yup.string().required("Campo requirido"),
})

export { formSchema }