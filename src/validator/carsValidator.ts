import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().min(2).max(30).required().messages({
        "string.empty": "Brand is required",
        "string.min": "Brand must be at least 2 characters",
    }),
    price: Joi.number().min(1).required().messages({
        "number.base": "Price must be a number",
        "number.min": "Price must be greater than 0",
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        "number.base": "Year must be a number",
        "number.min": "Year is too old",
        "number.max": "Year cannot be in the future",
    }),
});
