import express from 'express';
import {
  createContact,
  getContacts,
  getOneContact,
} from "../controllers/contactsController.js";

export const contactRouter = express.Router();

contactRouter.route('/')
  .get(getContacts)
  .post(createContact)
  
contactRouter.route('/:contactId')
  .get(getOneContact)
  .put((req, res) => res.json({message: `Update one contact with id: ${req.params.contactId}`}))
  .delete((req, res) => res.json({message: `Delete one contact with id: ${req.params.contactId}`}))

