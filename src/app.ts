import express from 'express'
import cors from 'cors'
import { database } from './database/config'

import routes from './routes/routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    database()
      .catch(() => { console.log('Erro ao Conectar ao MongoDB') })
    this.routers()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routers (): void {
    this.express.use(routes)
  }
}

export default new App().express
