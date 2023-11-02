const url = require("url");
const querystring = require("querystring");

export function parseParams(req) {
  const urlParts = url.parse(req.url);
  const params = querystring.parse(urlParts.query);
  return params;
}
