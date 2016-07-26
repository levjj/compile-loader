module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  var Module = module.constructor;
  var m = new Module();
  m._compile(source, this.resourcePath);
  return 'module.exports = ' + JSON.stringify(m.exports);
};
