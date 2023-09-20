import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Por favor, preencha o campo.")
    .email("Por favor, forneça um endereço de email válido."),
  password: z.string().nonempty("Por favor, preencha o campo."),
});

export type TLoginFormValues =z.infer<typeof loginFormSchema>