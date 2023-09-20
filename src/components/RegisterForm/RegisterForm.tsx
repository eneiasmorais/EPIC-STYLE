import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerFormSchema } from "./regiterFormSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Seu nome"
        disabled={loading}
        error={errors.name}
        id="name"
        {...register("name")}
      />

      <Input
        label="Foto de perfil"
        type="text"
        placeholder="Url da foto de perfil"
        disabled={loading}
        error={errors.image_url}
        id="image_url"
        {...register("image_url")}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Seu email"
        disabled={loading}
        error={errors.email}
        id="email"
        {...register("email")}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Sua senha"
        disabled={loading}
        error={errors.password}
        id="password"
        {...register("password")}
      />

      <Input
        label="Confirme sua senha"
        type="password"
        placeholder="Confirme sua senha"
        disabled={loading}
        error={errors.password_confirmation}
        id="password_confirmation"
        {...register("password_confirmation")}
      />

      <button type="submit" disabled={loading}>
        {loading ? "CADASTRANDO..." : "CADASTRAR"}
      </button>
    </form>
  );
};
