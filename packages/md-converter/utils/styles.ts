import { styleObject } from "../themes";

export const makeStyleText = (styles?: styleObject) => {
  if (!styles) return "";
  const arr = [];
  for (const key in styles) {
    arr.push(key + ":" + styles[key]);
  }
  return arr.join(";");
};
