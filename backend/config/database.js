module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5051),
        database: env('DATABASE_NAME', 'olxdb'),
        username: env('DATABASE_USERNAME', 'java'),
        password: env('DATABASE_PASSWORD', 'olx'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
