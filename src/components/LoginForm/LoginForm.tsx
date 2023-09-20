import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input/Input";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";


export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema)
  });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="email"
        label="Email"
        placeholder="Digite aqui seu email"
        id="email"
        error={errors.email}
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

      <button className="button--login" type="submit" disabled={loading}>
        {loading ? "ENTRANDO..." : "ENTRAR"}
      </button>
    </form>
  );
};
