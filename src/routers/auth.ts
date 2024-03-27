import { Elysia } from "elysia";
import { login, register } from "@/controllers/authController";
import { loginValidator, registerValidator } from "@/utils/validator";

const auth = new Elysia({ prefix: "/auth" })
  .post("/login", login, {
    body: loginValidator
  })
  .post("/register", register, {
    body: registerValidator
  });

export default auth;
