const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == '/') {
        res.write('Welcome home');
        return res.end();
    } else if (url == '/me') {
        res.write('I am me!');
        return res.end();
    }

};

module.exports = {
    handler: requestHandler,
    description: 'The Route file information'
};