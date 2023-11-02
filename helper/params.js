export function parseParams(req) {
  console.log(req.url);
  if (!req.url) return {};
  console.log(req.url);
  const url = req.url;
  const params = url.split("?")[1];
  const paramsArray = params.split("&");
  const paramsObject = {};
  paramsArray.forEach((param) => {
    const paramArray = param.split("=");
    paramsObject[paramArray[0]] = paramArray[1];
  });
  return paramsObject;
}
