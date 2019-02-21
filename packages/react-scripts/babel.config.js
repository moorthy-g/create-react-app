// This config extends CRA's defined babel config
module.exports = function(api) {
  api.cache(true);
  const presets = [];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
