import { DefaultBodyType, rest } from "msw";
import messageList from "./dummy.json";

interface List {
    writer: string;
    message: string;
    password: string;
    hint: string;
}

export const handlers = [
    rest.get("/letters", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(messageList));
    }),
    rest.post<List>("/letters", async (req, res, ctx) => {
        await sleep(200);
        // const { writer, message, password, hint} = await req.json()
        // console.log(writer)
        // messageList.push({
        //     writer,
        //     message,
        //     password,
        //     hint,
        // });
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