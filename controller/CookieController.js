const cookieRepository = require('../repository/CookieRepository')

module.exports = app => {

    app.get('/list', (req, res) => {
            res.send(cookieRepository.findAll());
    });
}