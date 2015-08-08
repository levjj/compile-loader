function PRIVATE(a) {
  return process.env.CLIENT ? a : undefined;
}
module.exports = {
  production: {
    port: 9000,
    assets: [],
    session: {
      secret: PRIVATE('eE79c5!637304*34eA0d5f5fbb,e3d1?')
    }
  }
};
