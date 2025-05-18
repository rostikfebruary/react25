import Joi from "joi";


const customerValidator = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters, min 1 max 30 characters', 'any.required':'Name is required'
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.email':'Incorrect email', 'any.required':'Email is required'
    }),
    phone: Joi.number().min(1).max(99999999).required().messages({
        'number.min':'Enter phone number starts with 1 and higher','number.max':'Phone number too big','any.required':'Phone is required'
    })
})

export {
    customerValidator
}