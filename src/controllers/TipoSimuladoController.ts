import { type Request, type Response } from 'express'
import { type ITipoSimulado } from '../Models/Simulado'
import type IServiceBase from '../services/Contracts/IServiceBase'
import TipoSimuladoService from '../services/TipoSimuladoService'

class TiposSimuladoController {
  private readonly service: IServiceBase<ITipoSimulado>
  constructor (service: IServiceBase<ITipoSimulado>) {
    this.service = service
  }

  public async post (req: Request, res: Response): Promise<Response> {
    const tipoS = await this.service.Add(req.body as unknown as ITipoSimulado)
    return res.json(tipoS)
  }
}

export default new TiposSimuladoController(TipoSimuladoService)
