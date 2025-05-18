import Joi from "joi";

const tierValidator = Joi.object({
    brand: Joi.number().min(1).required().messages({
        'number.min':'Enter brand id, min brand id 1', 'any.required':'Brand is required'
    }),
    season: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ ]{1,20}$/).required().messages({
        'string.pattern.base':'Enter tier season Winter or Summer', 'any.required':'Season is required'
    }),
    radius: Joi.number().min(16).max(22).required().messages({
        'number.min':'Minimal tier radius 16', 'number.max':'Maximum tier radius 22', 'any.required':'Radius is required'
    }),
    stock: Joi.number().min(1).max(10000).required().messages({
        'number.min':'Minimal stock is 1 unit', 'number.max':'Maximum stock is 10_000 units', 'any.required':'Stock is required'
    }),
    price: Joi.number().min(2000).max(1000000).required().messages({
        'number.min':'Minimal price 2000', 'number.max':'Maximal price 1_000_000', 'any.required':'Price is required'
    })
})

export {
    tierValidator
}