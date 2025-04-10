import * as z from "zod";
import { ZodType } from "zod";

export interface SignInFormDataType {
  email: string;
  password: string;
}

export const signInSchema: ZodType<SignInFormDataType> = z.object({
  email: z
    .string()
    .email("Введите корректный email")
    .min(1, "Введите вашу почту!"),
  password: z.string().min(1, "Введите пароль!"),
});
