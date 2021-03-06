module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@screens': ['./src/screens'],
            '@components': ['./src/components'],
            '@utils': ['./src/utils'],
            '@navigation': ['./src/navigation'],
            '@hooks': ['./src/hooks'],
            '@assets': ['./assets'],
          },
        },
      ],
    ],
  };
};
