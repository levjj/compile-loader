module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  var Module = module.constructor;
  var m = new Module();
  m._compile(source);
  return 'module.exports = ' + JSON.stringify(m.exports);
};
