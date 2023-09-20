import { useContext } from "react";
import { StyledPatchUserModal } from "./styledPatchUserModal"
import { Input } from "../Input/Input";
import { UserContext } from "../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TPatchFormValues, patchFormSchema } from "./patchFormSchema";

 
export const PatchUserModal = () => {
  const { setPatchModal,patchUser,user} = useContext(UserContext);
  const {
    register,
    handleSubmit,
  } = useForm<TPatchFormValues>({
    resolver: zodResolver(patchFormSchema),
  });

  const submit: SubmitHandler<TPatchFormValues> = (formData) => {
    patchUser(formData);
  };


return(

<StyledPatchUserModal>
 <div className="patchModal__container">
       <header>
          <h3>ATUALIZAR DADOS</h3>
          <button onClick={() =>setPatchModal(false)}>&#10005;</button>
        </header>
   
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            label="Nome"
            value={user?.name}
            id="name"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Input
            type="text"
            label="Foto"
            value={user?.image_url}
            id="image_url"
            {...register("photo")}
          />
          {errors.photo && <p>{errors.photo.message}</p>}
          <Input
            type="text"
            label="Email"
            value={user?.email}
            id="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <button type="submit">ATUALIZAR</button>
        </form>
       
        </div>
</StyledPatchUserModal>

)

}

