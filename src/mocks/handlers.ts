import { rest } from "msw";
import people from "./dummy.json";

export const handlers = [
    rest.get("/letters", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(people));
    }),
    rest.post("/letters", async (req, res, ctx) => {
        await sleep(200);
        people.push({
            writer: "345",
            message: "son",
            password: "asia",
            hint: "php",
        });

        return res(ctx.status(201), ctx.json(people));
    }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
      setTimeout(resolve, timeout);
  });
}