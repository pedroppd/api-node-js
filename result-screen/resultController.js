module.exports = app => {

    app.get('/list', (req, res) => {
            res.send('The get method is OK');
    });
}