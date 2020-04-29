module.exports = {
  apps: [
    {
      name: 'api',
      script: './server.js',
      env: {
        SERVER_PORT: 8006,
      },
    },
    {
      name: 'client',
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
