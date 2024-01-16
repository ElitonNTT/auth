import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Insira um E-mail válido!",
  }),
  password: z.string().min(1, {
    message: "Este campo não pode estar vazio!",
  }),
});
