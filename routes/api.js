const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const log = console.log;

router.get('/users', (req, res) => {
    let users = [{
            name: "John",
            age: 31,
            city: "New York"
        },
        {
            name: "Same",
            age: 21,
            city: "Orlando"
        }

    ];
    res.json(users[1]);
});

module.exports = router;