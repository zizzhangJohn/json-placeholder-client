import "@testing-library/jest-dom";
import { fetch, Headers, Request, Response } from "cross-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import dummyPost from "./dummyPost";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get("http://localhost/posts", (req, res, ctx) => {
    const start = req.url.searchParams.get("_start");
    const limit = req.url.searchParams.get("_limit");
    console.log(`start:${start}, limit:${limit}`);
    return res(ctx.json(dummyPost.data), ctx.set("X-Total-Count", "100"));
  }),
];

export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        `Found an unhandled ${req.method} request to ${req.url.href}`
      );
    },
  })
);

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
