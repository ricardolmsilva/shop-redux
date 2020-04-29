module.exports = {
  apps: [
    {
      name: 'api',
      script: 'npm',
      args: ['run', 'server'],
    },
    {
      name: 'client',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: 8080,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html',
      },
    },
  ],
}
