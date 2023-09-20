import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("Por favor, preencha o seu nome."),
    email: z
      .string()
      .nonempty("Por favor, preencha o seu endereço de email.")
      .email("Por favor, forneça um endereço de email válido."),

    image_url: z.string().nonempty("Por favor, forneça uma URL para a imagem do seu perfil.")
      .url("Por favor, forneça uma URL válida para a imagem do seu perfil."),

    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
        "Para garantir a segurança da sua senha, certifique-se de que ela contenha pelo menos uma letra maiúscula, uma letra minúscula, um número e um símbolo."
      ),

    password_confirmation: z.string().min(1, "Por favor, confirme sua senha."),
  })
  .refine(({ password, password_confirmation }) => password === password_confirmation, {
    message: "As senhas devem ser iguais",
    path: ["password_confirmation"],
  });
 export type TRegisterFormValues = z.infer<typeof registerFormSchema>