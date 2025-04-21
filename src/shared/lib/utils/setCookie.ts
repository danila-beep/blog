interface CookieOptions {
  path?: string;
  expires?: Date | string;
  "max-age"?: number;
  domain?: string;
  secure?: boolean;
  samesite?: "strict" | "lax" | "none";
  [key: string]: unknown; // На случай других опций
}

export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  options = {
    path: "/",
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};
