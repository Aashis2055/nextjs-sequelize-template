const models = rquire('../../db/models');

class Post{
    async post({title, image}){
        return await models.post.create({
            title,
            image
        });
    }
}

export default new Post()