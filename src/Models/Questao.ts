import { type Exame } from './Exame'
import { type Frente } from './Frente'
import { type Materia } from './Materia'

export interface Questao {
  _id: string
  exame: Exame
  ano: number
  caderno: string
  enemArea: string
  frente1: Frente
  frente2: Frente
  frente3: Frente
  materia: Materia
  numero: number
  textoQuestao: string
  textoAlternativaA: string
  textoAlternativaB: string
  textoAlternativaC: string
  textoAlternativaD: string
  textoAlternativaE: string
  alternativaCorreta: string
  imagemLink: string
}

export const EnemArea = [
  'Ciências Humanas',
  'Linguagens',
  'Ciências da Natureza',
  'Matemática'
]

export const Caderno = [
  'Azul',
  'Amarelo',
  'Rosa',
  'Branco',
  'Cinza'
]

export const Alternativa = [
  'A',
  'B',
  'C',
  'D',
  'E'
]
