const {Router} = require('express');
const router = Router();

reuter.get('/test', (req, res) => {
    const data = {
        "name" : "angel",
        "lastname":"flores"
    };
    res.json(data);
})


module.exports = router;