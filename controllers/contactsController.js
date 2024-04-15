import { Contact } from "../models/contact.js";
import validator from "validator";


export const createContact = async (req, res) => {

  const { name, lastName, email, phoneNumber, company } = req.body;

  const errorResponse = {
    message: 'Incorrect fields validation error',
    errors: []
  };
  
  if (!name) {

    errorResponse.errors.push({
      message: 'Required field missing',
      field: 'name',
    });

  }

  if (!lastName) {

    errorResponse.errors.push({
      message: 'Required field missing',
      field: 'lastName',
    });

  }

  if (email) {

    if (!validator.isEmail(email)) {

      errorResponse.errors.push({
        message: 'Invalid email',
        field: 'email',
      });

    } else if (await Contact.findOne({ email }, 'name').lean()) {

      errorResponse.errors.push({
        message: 'Email already registered',
        field: 'email',
      });      

    }

  }

  if (
    (phoneNumber && !validator.isNumeric(phoneNumber, { no_symbols: true })) ||
    phoneNumber.length !== 10
  ) {
    errorResponse.errors.push({
      message: "Invalid phone number: it must be comprised of ten digits",
      field: "phoneNumber",
    });
  }

  if (errorResponse.errors.length > 0) {

    return res.status(400).json(errorResponse);

  }

  try {
    
    const contact = await Contact.create({
      name,
      lastName,
      email,
      phoneNumber,
      company,
    });

    return res
      .status(201)
      .json({ message: "Contact created", contact: contact });

  } catch (error) {

    return res
      .status(500)
      .json({
        message: `Could not create contact: ${
          error._message ? error._message : "server error"
        }`,
      });

  }
}
