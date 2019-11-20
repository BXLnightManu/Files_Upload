const multer = require('multer');
const fs = require('fs');
const FILEPATH = './uploadedFiles'
const upload = multer({
    dest: `${FILEPATH}/`,
    limits: {
        fieldSize: 3 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if(!file.originalname.match(/\.png/)) {
            return cb(new Error('Only png image are allowed.'), false);
        }
        cb(null, true);
    }
})

async function fileProcessing (req, res) {
    try {
        const photos = req.files;
        if(!photos || photos.length===0) {
            res.status(400).send({
                status: false,
                payload: {
                    message: "No photo is selected.",
                    payload: null
                }
            })
        } else {
            let payload = [];
            photos.map(p => {
                fs.rename(
                    p.path,
                    './uploadedFiles/'+ p.originalname,
                    (err) => {
                        if(err) {
                            console.log(`File "${p.path.split("/")[1]}" was not successully renamed as "${p.originalname}" !`)
                        }
                    }
                );
                return payload.push({
                    name: p.originalname,
                    mimetype: p.mimetype,
                    size: p.size
                });
            });
            res.send({
                status: true,
                payload: {
                    message: "Photos are uploaded.",
                    payload
                }
            })
        }
    }
    catch(err) {
        res.status(500).send(err);
    }

}

module.exports = {
    upload,
    fileProcessing
}