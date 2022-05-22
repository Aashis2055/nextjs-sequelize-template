const multer = require('multiple');
const path = require('path');
const UPLOAD_DIR = path.join(process.cwd() , '/public/files/')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb)=>{
        const fileName = Date.now()+'-'+file.originalname.toLowerCase().split('-');
        cb(null, fileName);
    }
});

let upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024
    },
    fileFilter: (req, file, cb)=>{
        // if(file.mimetype == "applicaiton/pdf"){
        //     cb(null, true);
        // }else{
        //     cb(null, false);
        // }
        cb(null, true)
    }
})

module.exports = upload;