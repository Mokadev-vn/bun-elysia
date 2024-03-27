import authMiddleware from "@/middlewares/authMiddleware";
import { Elysia } from "elysia";

const test = new Elysia({ prefix: "/test" })
  .onBeforeHandle(authMiddleware)
  .get("/", () => "Hello from test route");

export default test;

