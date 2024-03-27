// router is elysia's router instance
import { Elysia } from "elysia";
import auth from "./auth";
import authMiddleware from "@/middlewares/authMiddleware";
import test from "./test";

const route = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello Elysia")
  .use(auth)
  .use(test)
  .get("/protected", authMiddleware, () => "Protected route");

export default route;
