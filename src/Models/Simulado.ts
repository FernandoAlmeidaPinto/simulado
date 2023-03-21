import { type Frente } from './Frente'
import { type Materia } from './Materia'
import { type Questao } from './Questao'

export interface Regra {
  materia: Materia
  quantidade: number
  frente: Frente | null
  ano: number | null
  caderno: string | null
}

export interface TipoSimulado {
  nome: string
  quantidadeTotalQuestao: number
  regras: Regra[]
}

export interface Simulado {
  nome: string
  descricao: string
  tipo: TipoSimulado
  questao: Questao[]
  aproveitamento: number
  vezesRespondido: number
  bloqueado: boolean
}
