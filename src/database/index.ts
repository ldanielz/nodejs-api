import { DataSource } from 'typeorm'

interface IOptions {
  host: string
}

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database_enay',
  port: 5432,
  username: 'docker',
  password: 'enay',
  database: 'rentx',
  migrations: ['.src/database/migrations/*.ts'],
})
AppDataSource.initialize()
  .then((options) => {
    const newOptions = options as unknown as IOptions
    newOptions.host = 'database'

    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
