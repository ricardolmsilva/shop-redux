require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'shop-redux-server',
      script: './server.js',
      env: {
        SERVER_PORT: process.env.SERVER_PORT,
      },
    },
    {
      name: 'shop-redux-client',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: process.env.CLIENT_PORT,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html',
      },
    },
  ],
}
