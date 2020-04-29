module.exports = {
  apps: [
    {
      name: 'shop-redux-server',
      script: './server.js',
      env: {
        SERVER_PORT: 8006,
      },
    },
    {
      name: 'shop-redux-client',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: 8007,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html',
      },
    },
  ],
}
