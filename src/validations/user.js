import Joi from '@hapi/joi';
import { NAME_RGP } from '../constans';

export default Joi.object({
  firstName: Joi.string().pattern(NAME_RGP),
  lastName: Joi.string().pattern(NAME_RGP),
  email: Joi.string().email(),
  login: Joi.string(),
  password: Joi.string(),
})
  .min(1)
  .max(5);
