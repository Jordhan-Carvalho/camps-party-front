const Joi = require("joi");

const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

const userSignUpSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  cpf: Joi.string().pattern(cpfRegex).required().messages({
    "string.pattern.base": "formato de CPF invalido",
  }),
  password: Joi.string().min(2).max(30).required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Confirmacao de senha diferente",
  }),
});

const userSignInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  password: Joi.string().min(2).max(30).required().messages({
    "string.base": `Tem que ser texto`,
    "string.min": "Senha tem que ser maior que 2 carc",
  }),
});

const validateSignup = (userForm) => {
  if (userSignUpSchema.validate(userForm, { abortEarly: false }).error) {
    throw new Error(
      userSignUpSchema.validate(userForm, { abortEarly: false }).error.message
    );
  }
};

const validateSignin = (email, password) => {
  if (
    userSignInSchema.validate({ email, password }, { abortEarly: false }).error
  ) {
    throw new Error(
      userSignInSchema.validate(
        { email, password },
        { abortEarly: false }
      ).error.message
    );
  }
};

module.exports = { validateSignup, validateSignin };
