import { processServerResponse } from "./utils";

export const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";
git;
