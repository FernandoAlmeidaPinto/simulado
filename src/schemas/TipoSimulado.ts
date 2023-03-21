import mongoose from '../database/config'
import { type TipoSimulado } from '../Models/Simulado'
import Frente from './Frente'
import Materia from './Materia'

const { Schema, model } = mongoose

const tipoSimuladoSchema = new Schema<TipoSimulado>({
  nome: {
    type: String,
    required: true
  },
  quantidadeTotalQuestao: {
    type: Number,
    required: true
  },
  regras: [{
    materia: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: Materia
    },
    quantidade: {
      type: Number,
      required: true
    },
    frente: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: Frente
    },
    ano: {
      type: Number,
      required: false
    },
    caderno: {
      type: Number,
      required: false
    }
  }]
}, {
  timestamps: true,
  versionKey: false
})

export default model('TipoSimulado', tipoSimuladoSchema)
