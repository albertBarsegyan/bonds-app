import { signUpSchema } from "@modules/auth/components/sign-up-form/schema.ts";
import { z } from "zod";

export type RegistrationFormData = z.infer<typeof signUpSchema>;
