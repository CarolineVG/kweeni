const express = require('express')
const router = express.Router();

/* kweeni */
router.get('/kweeni', function(req, res){
    res.render('./index', {title: 'kweeni'}); 
});

module.exports = router;