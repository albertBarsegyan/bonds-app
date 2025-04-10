import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, "Пожалуйста, введите ваше полное имя!"),
    email: z.string().email("Пожалуйста, введите корректный email!"),
    phone: z.string().min(1, "Пожалуйста, введите ваш номер телефона!"),
    source: z.string().optional(),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов!"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают!",
    path: ["confirmPassword"],
  });
