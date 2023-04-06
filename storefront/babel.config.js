module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-dotenv",
          verbose: false,
          path: ".env",
        },
      ],

      [
        "react-native-reanimated/plugin",
        {
          relativeSourceLocation: true,
        },
      ],
    ],
  };
};
