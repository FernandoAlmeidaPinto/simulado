import mongoose from '../database/config'
import { type Materia } from '../Models/Materia'
const { Schema, model } = mongoose

const materiaSchema = new Schema<Materia>({
  nome: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: false,
  versionKey: false
})

export default model('Materia', materiaSchema)
