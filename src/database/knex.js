module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '1',
    database: 'test_db'
  },
  migrations: {
    tableName: 'migration'
  }
}