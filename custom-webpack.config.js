// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

const webpack = require('webpack');

require('dotenv').config();

module.exports = (config, options, targetOptions) => {

  if (!process || !process.env) {
    throw new Error('Failed to load environment');
  }

  config.plugins.push(
    new webpack.EnvironmentPlugin([
      'API_ENDPOINT'
    ])
  );

  return config;
}
