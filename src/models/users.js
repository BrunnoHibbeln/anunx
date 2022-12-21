import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Required field']
   },
   email: {
      type: String,
      required: [true, 'Required field']
   },
   password: {
      type: String,
      required: [true, 'Required field']
   },
})

export default mongoose.models.users || mongoose.model('users', schema)