import { check } from "express-validator";

export const customersRules = {
  forSave: [
    check('identification').notEmpty().withMessage('The Identification field is required'),
    check('name').notEmpty().withMessage('The Name field is required'),
    check('email').isEmail().withMessage('Invalid email format'),
    check('category').notEmpty().withMessage('The Category field is required'),
    check('telephone').notEmpty().withMessage('The Telephone field is required'),
  ]
}
