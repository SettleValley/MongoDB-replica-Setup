// To make importing them easier, you can export all models from single file
import User, { UserSchema } from "./User"
import {SuperMarketSchema} from "./SuperMarket"

export default {
  User: {
    model: User,
    schema: UserSchema,
  },
  SuperMarket:{
    schema: SuperMarketSchema
  }
}