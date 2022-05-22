const models = require('./db/models');

(async function(){
    console.log(models.users.findOne());
})()