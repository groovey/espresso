const router = require('express').Router();

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