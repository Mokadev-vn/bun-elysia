import { t } from "elysia";

const loginValidator = t.Object({
    username: t.String({
        error: "Email is required",
    }),
    password: t.String({
        error: "Password is required",
    }),
})

const registerValidator = t.Object({
    name: t.String({
        error: "Name is required"
    }),
    username: t.String({
        error: "Username is required",
    }),
    email: t.String({
        format: "email",
        error: "Email is required",
    }),
    password: t.String({
        format: "password",
        error: "Password is required",
    }),
})

export { loginValidator, registerValidator };
