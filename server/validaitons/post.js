const Joi = require("joi");

const postSchema = Joi.object({
    title: Joi.string().required()
})

export default {
    postSchema
}