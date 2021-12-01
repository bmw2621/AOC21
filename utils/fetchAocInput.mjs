import fetch from "node-fetch";
import Cookie from "./getCookie.mjs";

export const fetchAocInput = async (path) => {
  const url = `https://adventofcode.com/2021/day${path}`;
  const data = await fetch(url, {
    headers: { Cookie },
  }).then((resp) => resp.text());
  return data;
};
