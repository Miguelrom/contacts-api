import  mongoose  from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not a valid email`
    }
  },
  phoneNumber: {
    type: String,
    minLength: 10,
    maxLength: 10,
    validate: {
      validator: (value) => validator.isNumeric(value, { no_symbols: true }),
      message: ({ value }) => `${value} is not a valid phone number`
    }
  },
  company: String,
});

export const Contact = mongoose.Model('Contact', contactSchema);
