import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import route from "./routers";
import ws from "./ws";
import connectMG from "./configs/mongodb";
import { handlerError } from "./utils/error";

connectMG();

const app = new Elysia()
  .onError(handlerError)
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "secret",
    })
  )
  .use(route)
  .use(ws)
  .get("/", () => {
    return {
      status: 200,
      message: "Server is running",
    };
  })

  .listen(3000);
console.log(
  `🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`
);
