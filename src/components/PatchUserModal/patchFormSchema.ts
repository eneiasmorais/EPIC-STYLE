import { z } from "zod";

export const patchFormSchema = z
.object({
  name: z.string().optional() ,
  photo: z.string().optional(),
  email: z.string().optional()

})

 export type TPatchFormValues = z.infer<typeof patchFormSchema>