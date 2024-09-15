import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'
import bcryptjs from 'bcryptjs'
import config from '../../config'

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true, select: 0 },
    phone: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this

  user.password = await bcryptjs.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  )

  next()
})

UserSchema.post('save', function (doc, next) {
  doc.password = ''

  next()
})

export const UserModel = model<TUser>('User', UserSchema)
