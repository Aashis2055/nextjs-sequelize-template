import nextConnect from "next-connect";
import post from "server/services/post";
const fileUpload = require("server/middleware/fileUpload");

const handler = nextConnect()
    .use(fileUpload.single("file"))
    .post(async (req, res)=>{
        const {title} = req.body;
        try {
            const post = post.post({title, image: 'image'});
            return res.status(200).json({status: 'ok', msg: 'Posted'})
        } catch (error) {
            return res.statusCode(500).json({status: 'error', msg: 'Server Error'})
        }
    })

export default handler;