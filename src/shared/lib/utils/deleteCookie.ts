import { setCookie } from ".";

export const deleteCookie = (name: string) => {
  setCookie(name, "", {
    "max-age": -1,
  });
};
