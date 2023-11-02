module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/fdn/products",
        destination: "http://femaledaily-products.loca.lt/products",
      },
    ];
  };
  return {
    rewrites,
  };
};
