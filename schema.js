const Joi = require("joi");

const listings = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        des
    }).required()
});