import express from 'express';
import {
  createContact,
  getContacts,
  getOneContact,
  updateContact,
} from "../controllers/contactsController.js";

export const contactRouter = express.Router();

contactRouter.route('/')
  .get(getContacts)
  .post(createContact)
  
contactRouter.route('/:contactId')
  .get(getOneContact)
  .put(updateContact)
  .delete((req, res) => res.json({message: `Delete one contact with id: ${req.params.contactId}`}))

