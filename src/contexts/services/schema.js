import * as Yup from "yup"

export const loginValidation = Yup.object().shape({
    name: Yup.string()
    .required("Insira seu nome!")
    .max(20),
    email: Yup.string()
    .email("Email inválido!")
    .required("Campo obrigatório"),
    password: Yup.string()
    .required("Campo obrigatório")
    .min(3, "Sua senha deve possuir no mínimo 3 caracteres!")
    .max(8, "Sua senha deve possuir no máximo 8 caracteres!"),
    })