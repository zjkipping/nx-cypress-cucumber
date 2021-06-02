const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');

module.exports = (on, config) => {
  on(
    'file:preprocessor',
    preprocessTypescript(config, (webpackConfig) => {
      webpackConfig.module.rules = [
        ...webpackConfig.module.rules,
        {
          test: /\.feature$/,
          use: [
            {
              loader: 'cypress-cucumber-preprocessor/loader',
            },
          ],
        },
        {
          test: /\.features$/,
          use: [
            {
              loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
            },
          ],
        },
      ];
      return webpackConfig;
    })
  );
};
