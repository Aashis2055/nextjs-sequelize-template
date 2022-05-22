const models = require('../../db/models');

export default async function getOne(){
    return await models.users.findOne({
        attributes: ['firstName', 'lastName', "username"]
    });
}