import { rest } from "msw";
import messageList from "./dummy.json";
import { List } from '../types/common';

export const handlers = [
    rest.get("/letters", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(messageList));
    }),
    rest.post<List>("/letters", async (req, res, ctx) => {
        await sleep(200);
        messageList.push(await req.json())
        console.log(messageList)
        return res(ctx.status(201), ctx.json(messageList));
    }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
      setTimeout(resolve, timeout);
  });
}