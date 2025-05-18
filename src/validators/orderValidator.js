import Joi from "joi";


const orderValidator = Joi.object({
    customer: Joi.number().min(1).required().messages({
        'number.min':'Enter Customer id', 'any.required':'Customer is required'
    }),
    status: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters, Describe order status', 'any.required':'Status is required'
    }),
    total: Joi.number().min(1).max(1_000_000).required().messages({
        'number.min':'Total price min 1 grn','number.max':'Max total price 1_000_00 grn', 'any.required':'Total price is required'
    }),
    order_date: Joi.date().less('now').required().messages({
        'date.base':'Invalid date format', 'date.less':'Date must be today or earlier', 'any.required':'Date is required'
    })
})

export {
    orderValidator
}