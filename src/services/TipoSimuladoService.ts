import { type ITipoSimulado } from '../Models/Simulado'
import TipoSimulado from '../schemas/TipoSimulado'
import type IServiceBase from './Contracts/IServiceBase'

class TipoSimuladoService implements IServiceBase<ITipoSimulado> {
  public async Add (tipoSimulado: ITipoSimulado): Promise<ITipoSimulado> {
    const tipoS = await TipoSimulado.create({
      nome: tipoSimulado.nome,
      quantidadeTotalQuestao: tipoSimulado.quantidadeTotalQuestao,
      regras: tipoSimulado.regras != null ? tipoSimulado.regras : []
    })

    return tipoS
  }
}

export default new TipoSimuladoService()
