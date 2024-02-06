'use strict';

/**
 * Настройки поумолчанию
 */
module.exports = {
  account: {
    id: '3f9210c1b6ab509e9de764a85b0c62c6',
    token: '254c1c1a4a98d4127a7a77ff95c9d2c2',
    url: 'myshop-xz952.myinsales.ru',
    http: true
  },
  theme: {
    id: '5581079',
    root: '.',
    backup: true,
    assetsSync: true,
    excludeFiles: ["imba.template.zip"],
    onUpdate: function onUpdate() {
      // обновление темы
    },
    assetsDomain: 'https://assets.insales.ru'
  },
  util: {
    openBrowser: true
  },
  plugins: {
    exclude: ['*.min.js', '*.min.css', '*.liquid']
  },
  chokidarOptions: {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    followSymlinks: true,
    usePolling: false,
    interval: 200,
    delay: 0,
    binaryInterval: 300,
    alwaysStat: true,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    },
    ignorePermissionErrors: true
  }
};