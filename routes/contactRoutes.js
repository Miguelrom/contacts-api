import express from 'express';

export const contactRouter = express.Router();

contactRouter.route('/')
  .get((req, res) => res.json({message: "Get all contacts..."}))
  .post((req, res) => res.json({message: "Create one contact..."}))
  
contactRouter.route('/:contactId')
  .get((req, res) => res.json({message: `Get one contact with id: ${req.params.contactId}`}))
  .put((req, res) => res.json({message: `Update one contact with id: ${req.params.contactId}`}))
  .delete((req, res) => res.json({message: `Delete one contact with id: ${req.params.contactId}`}))

