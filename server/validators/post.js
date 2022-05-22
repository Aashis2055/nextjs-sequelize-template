import {postSchema} from "server/validaitons/post";

export default postValidator = (req, res,next )=>{
    try{
        const result = await postSchema.validateAsync(req.body, {abortEarly: false});
        return next();
    }catch(error){
        return res.status(400).json({status: 'ok', msg: 'Validation Error'})
    }
}