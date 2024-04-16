import express from 'express';
import { createContact, getContacts } from '../controllers/contactsController.js';

export const contactRouter = express.Router();

contactRouter.route('/')
  .get(getContacts)
  .post(createContact)
  
contactRouter.route('/:contactId')
  .get((req, res) => res.json({message: `Get one contact with id: ${req.params.contactId}`}))
  .put((req, res) => res.json({message: `Update one contact with id: ${req.params.contactId}`}))
  .delete((req, res) => res.json({message: `Delete one contact with id: ${req.params.contactId}`}))

