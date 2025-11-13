"use server";

import z, { success } from "zod";

const loginValidationZodSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(6).max(100),
});

export const loginUser = async (_currentState: any, formData: any) => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validatedFields = loginValidationZodSchema.safeParse(loginData);
    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            error: issue.message,
          };
        }),
      };
    }
    console.log("loginData", loginData);

    const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(res, "res");
    return res;
  } catch (error) {
    console.log(error);
    console.log("Login failed");
  }
};
