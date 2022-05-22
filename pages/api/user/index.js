import nextConnect from "next-connect";
import get from "server/services/user";

const handler = nextConnect()
    // middleware
    .get(async (req, res)=>{
        try {
            const user = await get();
            if(!user){
                return res.status(204).json({status: 'ok', msg: 'User not found'})
            }
            return res.status(200).json({status: 'ok', user});
        } catch (error) {
            console.log(error);
            return res.status(500).json({status: 'error', msg: "Server Error"});
        }
    })
    .post(async (req,res)=>{
        return res.end('method - get')
    })

export default handler;