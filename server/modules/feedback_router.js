const express = require('express');
const router = express.Router();
const pool = require('./pool.js')


router.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(() => res.sendStatus(201))
        .catch((error) => {
            console.log('error on query POST', error);
            res.sendStatus(500)});
});

module.exports = router;