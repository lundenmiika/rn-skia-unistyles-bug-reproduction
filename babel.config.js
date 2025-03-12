module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Add Unistyles plugin
      ['react-native-unistyles/plugin']
    ],
  };
};
